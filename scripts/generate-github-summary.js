const fs = require('fs');
const path = require('path');

const reportPath = path.join(process.cwd(), 'ctrf', 'ctrf-report.json');

try {
  if (fs.existsSync(reportPath)) {
    const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const summary = data.results.summary;
    const tests = data.results.tests;
    const flakyCount = tests.filter(t => t.flaky).length;
    const duration = ((summary.stop - summary.start) / 1000).toFixed(2);

    let markdown = `## 📊 Playwright Execution Summary\n\n`;
    markdown += `| Total Tests | Passed ✅ | Failed ❌ | Skipped ⏭️ | Flaky 🍂 | Duration ⏱️ |\n`;
    markdown += `| --- | --- | --- | --- | --- | --- |\n`;
    markdown += `| **${summary.tests}** | **${summary.passed}** | **${summary.failed}** | **${summary.skipped}** | **${flakyCount}** | **${duration}s** |\n\n`;

    // Calculate Application Breakdown
    const apps = {};
    tests.forEach(test => {
      // Parse names like "[API] [DummyJSON] should do xyz"
      const match = test.name.match(/^\[(.*?)\] \[([^\]]+)\]/);
      const appName = match ? `${match[1]} - ${match[2]}` : 'Other';
      
      if (!apps[appName]) {
        apps[appName] = { total: 0, passed: 0, failed: 0, skipped: 0, flaky: 0 };
      }
      apps[appName].total++;
      if (test.status === 'passed') apps[appName].passed++;
      if (test.status === 'failed') apps[appName].failed++;
      if (test.status === 'skipped') apps[appName].skipped++;
      if (test.flaky) apps[appName].flaky++;
    });

    markdown += `### 🏗️ Application Breakdown\n\n`;
    markdown += `| Layer & Application | Total | Passed | Failed | Skipped | Flaky |\n`;
    markdown += `| --- | --- | --- | --- | --- | --- |\n`;

    for (const [app, stats] of Object.entries(apps)) {
      const statusIcon = stats.failed > 0 ? '❌' : '✅';
      markdown += `| **${statusIcon} ${app}** | ${stats.total} | ${stats.passed} | ${stats.failed} | ${stats.skipped} | ${stats.flaky} |\n`;
    }

    // List Failed Tests (if any)
    const failedTests = tests.filter(t => t.status === 'failed');
    if (failedTests.length > 0) {
      markdown += `\n### ❌ Failed Tests\n\n`;
      failedTests.forEach(t => {
        markdown += `- **${t.name}**\n`;
      });
    }

    // Link to Full Dashboard
    const repoName = process.env.GITHUB_REPOSITORY || 'aquarian-patil/playwright-typescript-demo';
    const username = repoName.split('/')[0];
    const repo = repoName.split('/')[1];
    const pagesUrl = `https://${username}.github.io/${repo}/`;

    markdown += `\n---\n\n`;
    markdown += `### 🔗 **[👉 View Full QA Dashboard & Trace Viewers Here](${pagesUrl})**\n`;
    markdown += `*(Note: The dashboard may take 1-2 minutes to update after the pipeline finishes)*\n`;

    // Append to GitHub Actions Summary
    if (process.env.GITHUB_STEP_SUMMARY) {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown);
    } else {
      console.log(markdown);
    }

    console.log('Successfully generated GitHub Actions Custom Summary.');
  } else {
    console.log('ctrf-report.json not found, skipping summary generation.');
  }
} catch (error) {
  console.error('Error generating summary:', error);
}

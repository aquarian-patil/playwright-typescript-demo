const fs = require('fs');
const path = require('path');

const reportPath = path.join(process.cwd(), 'playwright-report', 'index.html');

try {
  if (fs.existsSync(reportPath)) {
    let html = fs.readFileSync(reportPath, 'utf8');
    
    // 1. Change the Title
    html = html.replace('<title>Playwright Report</title>', '<title>Playwright Deep Debugging Report</title>');
    
    // 2. Inject Metadata Banner just inside the body
    const runId = process.env.GITHUB_RUN_ID || 'Local';
    const commitId = process.env.GITHUB_SHA ? process.env.GITHUB_SHA.substring(0, 7) : 'N/A';
    
    const metadataBanner = `
      <div style="background-color: #1e1e2e; color: #cdd6f4; padding: 10px 20px; font-family: monospace; display: flex; justify-content: space-between; border-bottom: 2px solid #89b4fa; z-index: 9999; position: relative;">
        <div><strong>Environment:</strong> ${process.env.CI ? 'CI Pipeline' : 'Local'}</div>
        <div><strong>Run ID:</strong> ${runId}</div>
        <div><strong>Commit:</strong> ${commitId}</div>
      </div>
    `;
    
    html = html.replace('<body>', `<body>\n${metadataBanner}`);
    
    fs.writeFileSync(reportPath, html);
    console.log('Successfully customized native Playwright HTML report.');
  } else {
    console.log('playwright-report/index.html not found, skipping customization.');
  }
} catch (error) {
  console.error('Error customizing report:', error);
}

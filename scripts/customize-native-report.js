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

  // --- CUSTOMIZE MONOCART REPORT ---
  const monocartPath = path.join(process.cwd(), 'monocart-report', 'index.html');
  if (fs.existsSync(monocartPath)) {
    let monoHtml = fs.readFileSync(monocartPath, 'utf8');
    
    // Inject a floating button to access the native report
    const floatingBtn = `
      <a href="./playwright-report/index.html" target="_blank" style="position: fixed; bottom: 20px; right: 20px; background-color: #4F46E5; color: white; padding: 12px 24px; border-radius: 8px; font-family: system-ui, sans-serif; text-decoration: none; font-weight: bold; font-size: 14px; z-index: 999999; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: transform 0.2s; cursor: pointer;">
        🔍 View Deep Debug Report ↗
      </a>
    `;
    
    monoHtml = monoHtml.replace('<body>', \`<body>\\n\${floatingBtn}\`);
    fs.writeFileSync(monocartPath, monoHtml);
    console.log('Successfully injected floating button into Monocart report.');
  } else {
    console.log('monocart-report/index.html not found, skipping button injection.');
  }

} catch (error) {
  console.error('Error customizing report:', error);
}

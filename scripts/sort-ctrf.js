const fs = require('fs');

const reportPath = 'ctrf/ctrf-report.json';

try {
  if (fs.existsSync(reportPath)) {
    const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    
    // Sort tests alphabetically by name. 
    // Since names start with [API] or [UI] and then [AppName], 
    // this perfectly groups them by layer and application.
    data.results.tests.sort((a, b) => a.name.localeCompare(b.name));
    
    fs.writeFileSync(reportPath, JSON.stringify(data, null, 2));
    console.log('Successfully sorted CTRF report by layer and application.');
  } else {
    console.log('CTRF report not found, skipping sort.');
  }
} catch (error) {
  console.error('Error sorting CTRF report:', error);
  process.exit(1);
}

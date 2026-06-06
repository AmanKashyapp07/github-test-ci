const fs = require('fs');
const path = require('path');

console.log('🔍 Starting static lint checks...');

const files = fs.readdirSync(__dirname);
let errors = 0;

for (const file of files) {
  if (file.endsWith('.js') && file !== 'lint.js' && file !== 'build.js') {
    const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    
    // Simple check: warning if line length exceeds 120 characters
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (line.length > 120) {
        console.warn(`⚠️  [WARNING] ${file}:${index + 1} Line length exceeds 120 characters (${line.length} chars).`);
      }
    });

    console.log(`✔ Checked ${file} successfully.`);
  }
}

if (errors > 0) {
  console.error(`❌ Lint failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('🟢 Lint checks passed successfully!');
  process.exit(0);
}

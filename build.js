const fs = require('fs');
const path = require('path');

console.log('📦 Starting production compilation...');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const sourceFiles = ['checkout.js', 'order.js', 'pricing.js', 'shipping.js'];
let bundleContent = '// MagnusCI Production Bundle\n// Generated at ' + new Date().toISOString() + '\n\n';

for (const file of sourceFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    bundleContent += `// --- Module: ${file} ---\n${content}\n\n`;
    console.log(`  -> Bundled ${file}`);
  }
}

fs.writeFileSync(path.join(distDir, 'bundle.js'), bundleContent);
console.log('✔ Compilation completed successfully. Output saved to dist/bundle.js'); // what does bundle.js do? It contains all the JavaScript code for the application, bundled together for production use.

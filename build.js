const fs = require('fs');
const path = require('path');

console.log("Starting simple build process...");

const secretMessage = process.env.MY_HTML_SECRET || "No secret found. It's safe!";

const originalHtml = fs.readFileSync('index.html', 'utf8');

const newHtml = originalHtml.replace('__SECRET_MESSAGE_PLACEHOLDER__', secretMessage);

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'index.html'), newHtml);

console.log("Build finished. Final HTML is in /public/index.html");
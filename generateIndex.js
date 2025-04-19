const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const outputFile = 'index.html';

// Các thư mục/file cần bỏ qua
const ignoreList = ['.git', 'node_modules', '.DS_Store'];

function listTopLevel(dirPath) {
  let result = '';
  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    if (ignoreList.includes(item)) return;

    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    const encoded = encodeURIComponent(item);

    if (stat.isDirectory()) {
      result += `<li><a href="${encoded}/" target="_blank"><strong>${item}/</strong></a></li>\n`;
    } else {
      result += `<li><a href="${encoded}" target="_blank">${item}</a></li>\n`;
    }
  });

  return result;
}

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>File Index</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    ul { list-style-type: none; padding-left: 20px; }
    a { text-decoration: none; color: darkgreen; }
    a:hover { text-decoration: underline; }
    strong { color: darkblue; }
  </style>
</head>
<body>
  <h1>Danh sách file và thư mục</h1>
  <ul>
    ${listTopLevel(rootDir)}
  </ul>
</body>
</html>
`;

fs.writeFileSync(outputFile, htmlContent);
console.log(`✅ Đã tạo index.html với link đầy đủ cho cả file và thư mục.`);

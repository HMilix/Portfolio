const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'images');
const distDir = path.join(__dirname, 'dist');
const destDir = path.join(distDir, 'images');

function copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDirectory(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDirectory(sourceDir, destDir);

console.log('Images copied successfully!');
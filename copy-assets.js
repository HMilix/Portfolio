const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'images');
const distDir = path.join(__dirname, 'dist');
const destDir = path.join(distDir, 'images');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(sourceDir).forEach(file => {
    if (/\.(png|gif|jpg)$/i.test(file)) {
        const srcFile = path.join(sourceDir, file);
        const destFile = path.join(destDir, file);
        const distFile = path.join(distDir, file);

        fs.copyFileSync(srcFile, destFile);

        if (fs.existsSync(distFile)) {
            fs.unlinkSync(distFile);
        }
    }
});

console.log('Images copied successfully!');
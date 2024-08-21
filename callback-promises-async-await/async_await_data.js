const fs = require('fs').promises;

const filePath = 'data.txt';

async function readFileContent() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading the file:', err);
    }
}

readFileContent();

const fs = require('fs').promises;

const filePath = 'data.txt';

fs.readFile(filePath, 'utf8')
    .then((data) => {
        console.log('File content:', data);
    })
    .catch((err) => {
        console.error('Error reading the file:', err);
    });

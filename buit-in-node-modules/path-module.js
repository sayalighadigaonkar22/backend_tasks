const path = require('path');

const filePath = 'built-in-node-modules/message.txt';
const parsedPath = path.parse(filePath);

console.log('Directory:', parsedPath.dir);
console.log('Base:', parsedPath.base);
console.log('Extension:', parsedPath.ext);
console.log('Name:', parsedPath.name);

// dir: The directory of the file.
// base: The full name of the file, including its extension.
// ext: The file extension.
// name: The name of the file without the extension.

const completePath = path.join(__dirname, 'public', 'index.html');
console.log('Complete Path:', completePath);
// Write a script that reads the content of a file named “data.txt”. The content of the file should be logged into the console. Handle any errors that may occur.
// 1 . Using Callbacks.

const fs = require('fs');

const filePath = 'data.txt';

// fs.writeFile(filePath, 'This is the initial content of data.txt', 'utf8', (err) => {
//     if (err) {
//         console.error('Error creating the file:', err);
//         return;
//     }
//     console.log('File created successfully.');

//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//         } else {
//             console.log('File content:', data);
//         }
//     });
// });


const initialContent = 'This is the initial content of data.txt';
fs.writeFile(filePath, initialContent, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File created and initial content written successfully.');
});










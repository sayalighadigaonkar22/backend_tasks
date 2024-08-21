// Create a file:

const fs = require('fs');

fs.writeFile('message.txt', 'Hello, this is the Initial message in the file.', (err) => {
    if (err) throw err;
    console.log("File 'message.txt' Created and text written.");
});

// Read from file

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File content:", data);
// });

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Content of 'message.txt':");
    console.log(data);
});


// appendFile
fs.appendFile('message.text', '\n This is the appended text.', (err) => {
    if (err) throw err;
    console.log("TExt Appended to File 'message.text':");
});

// fs.unlink('message.txt' , (err) =>{
//     if (err){
//         console.log("File 'message.txt' does not exist");
//     }
//     else{
//         console.log("File 'message.txt' deleted");
//     }
// })
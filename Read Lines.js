const fs = require('fs');
const readline = require('readline');

// Open the text file in read-only mode
const fileStream = fs.createReadStream('path/to/file.txt', 'utf8');

// Create a new instance of the readline interface
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lineNumber = 0;
let lineText;

// Read the file line by line
rl.on('line', (line) => {
  lineNumber++;

  // If this is the line we want to read, store the line text
  if (lineNumber === 5) {
    lineText = line;
  }
});

// When the file has been fully read, print the line text
rl.on('close', () => {
  console.log(lineText);
});

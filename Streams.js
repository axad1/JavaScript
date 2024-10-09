const fs = require("fs");

// Create a readable stream from a file
const readableStream = fs.createReadStream("input.txt", "utf8");

// Create a writable stream to a file
const writableStream = fs.createWriteStream("output.txt");

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

readableStream.on("data", (chunk) => {
  //   console.log("Received chunk:", chunk);
});

writableStream.on("finish", () => {
  //   console.log("Writing finished.");
});

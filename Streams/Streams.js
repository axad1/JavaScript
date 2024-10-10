const fs = require("fs");
const readableStream = fs.createReadStream("input.txt", "utf8");
const writableStream = fs.createWriteStream("output.txt");
readableStream.pipe(writableStream);

readableStream.on("data", (chunk) => {
  //   console.log("Received chunk:", chunk);
});

writableStream.on("finish", () => {
  console.log("Writing finished.");
});

const readline = require("readline");
const fs = require("fs");
const readableStream = fs.createReadStream("input.txt");

const rl = readline.createInterface({
  input: readableStream,
  //   crlfDelay: Infinity,
});

rl.on("line", (line) => {
  console.log(`Processing log line: ${line}`);
});

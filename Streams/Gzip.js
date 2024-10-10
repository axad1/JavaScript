const fs = require("fs");
const zlib = require("zlib");

function zip() {
  const gzipStream = zlib.createGzip();
  const readableStream = fs.createReadStream("input.txt");
  const writableStream = fs.createWriteStream("output.txt.gz");
  readableStream.pipe(gzipStream).pipe(writableStream);
}

function unzip() {
  const unzipStream = zlib.createGunzip();
  const readableStream = fs.createReadStream("output.txt.gz");
  const writableStream = fs.createWriteStream("output.txt");
  readableStream.pipe(unzipStream).pipe(writableStream);
}

// run 1 at a time
zip();
// unzip();

const fs = require("fs");
const zlib = require("zlib");
const { pipeline, PassThrough } = require("stream");

function outputWithPipeline() {
  pipeline(
    fs.createReadStream("input.txt"),
    zlib.createGzip(),
    fs.createWriteStream("compressed.txt.gz"),
    (err) => {
      if (err) {
        console.error("Pipeline failed", err);
      } else {
        console.log("Pipeline succeeded");
      }
    }
  );
}

function multipleOutputWithPipeline() {
  const passThrough = new PassThrough();

  pipeline(
    fs.createReadStream("input.txt"),
    passThrough, // Split the stream to write to multiple files
    zlib.createGzip(),
    fs.createWriteStream("compressed.txt.gz"),
    (err) => {
      if (err) {
        console.error("Pipeline failed", err);
      } else {
        console.log("Pipeline succeeded");
      }
    }
  );

  passThrough.pipe(fs.createWriteStream("output1.txt"));
  passThrough.pipe(fs.createWriteStream("output2.txt"));
}

// run 1 at a time
outputWithPipeline();
// multipleOutputWithPipeline();

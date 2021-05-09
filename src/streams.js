const fs = require("fs");
const { Transform } = require("stream");
const cipher = require("./cipher");

function readStreamFunc(filename) {
  if (filename) {
    if (fs.accessSync(filename)) {
      return fs.createReadStream(filename, "utf-8");
    } else {
      process.stdout.write("Input file does not exist");
      process.exit(1);
    }
  }
  return process.stdin;
}

function writeStreamFunc(filename) {
  if (filename) {
    if (fs.accessSync(filename)) {
      return fs.createWriteStream(filename, { encoding: 'utf8', flags: "a" });
    } else {
      process.stdout.write("Output file does not exist");
      process.exit(1);
    }
  }
  return process.stdout;
}

function transformStreamFunc(shift) {
  return new Transform({
    transform(chunk, _encoding, callback) {
      this.push(cipher(chunk.toString("utf8"), shift));
      callback();
    }
  })
}

module.exports = {
  readStreamFunc,
  writeStreamFunc,
  transformStreamFunc
};





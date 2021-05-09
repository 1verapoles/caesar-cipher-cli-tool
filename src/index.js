const { Command } = require("commander");
const { pipeline } = require("stream");
const validateArgs = require("./utils/validateArgs");
const { readStreamFunc, writeStreamFunc, transformStreamFunc } = require("./streams");

const program = new Command();
program
  .storeOptionsAsProperties(false)
  .version("0.0.1")
  .option("-s, --shift <type>", "shift", value => value)
  .option("-i, --input <type>", "input file", value => value)
  .option("-o, --output <type>", "output file", value => value)
  .option("-a, --action <type>", "encode/decode", value => value)
  .action(() => {
    let { action, shift, input, output } = program.opts();
    if (shift) shift = Number(shift);
    validateArgs(shift, action);
    if (action === "decode") shift = shift * -1;
    pipeline(
      readStreamFunc(input),
      transformStreamFunc(shift),
      writeStreamFunc(output),
      e => {
        if (e) {
          process.stderr.write("Somуthing went wrong", e);
          process.exit(1);
        }
      }
    );
  })
  .parse(process.argv);

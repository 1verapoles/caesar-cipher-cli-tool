function validateArgs(shift, actionType) {
  if (!Number.isInteger(shift)) {
    process.stderr.write("Shift must be an integer \n");
    process.exit(1);
  }
  if (actionType !== "decode" && actionType !== "encode") {
    process.stderr.write("Action must be either decode or encode \n");
    process.exit(1);
  }
}

module.exports = validateArgs;

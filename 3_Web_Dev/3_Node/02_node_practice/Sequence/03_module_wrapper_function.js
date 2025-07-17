function moduleWrapperFunction(exports, require, module, __filename, __dirname) {
}
console.log("Module wrapper function is running");

// Require
const logger = require('./02_01_logger_modules');

// Exports
const add = (a, b) => {a+b};

// Correct way to export
module.exports.add = add;
// exports.add = add;
// module.exports = add;
// module.exports = {add}; // slightly different but works 

// Incorrect way to export
// exports = add;

console.log("Module: ", module);

console.log("Filename:", __filename); // Correct
console.log("Filename:", module.filename); // Correct
console.log("Filename:", module.__filename); // InCorrect

console.log("Dirname:", __dirname); // Correct

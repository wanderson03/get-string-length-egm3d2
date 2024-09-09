const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const myString = prompt('Enter a string: ');

console.log(myString);

// TODO: get the size of `myString` defined above and assign to `len`.
// NOTE: DO NOT HARD CODE THE SIZE OF `myString`. When you change the value
// of `myString`, the test should still pass.
let len = -1;

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

console.log('The length of the string is ' + len);

module.exports = {
  myString,
  len,
};

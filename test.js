var padString = require('./padString.js');

var test = "test";

console.log('\npadStart, target length of 10');
console.log('1:  ' + test.padStart(10, "1"));
console.log('2:  ' + test.padStart(10, "12"));
console.log('3:  ' + test.padStart(10, "123"));
console.log('4:  ' + test.padStart(10, "1234"));
console.log('5:  ' + test.padStart(10, "12345"));
console.log('6:  ' + test.padStart(10, "123456"));
console.log('7:  ' + test.padStart(10, "1234567"));
console.log('8:  ' + test.padStart(10, "12345678"));
console.log('9:  ' + test.padStart(10, "123456789"));
console.log('10: ' + test.padStart(10, "1234567890"));

console.log('\npadBoth, target length of 10');
console.log('1:  ' + test.padBoth(10, "1"));
console.log('2:  ' + test.padBoth(10, "12"));
console.log('3:  ' + test.padBoth(10, "123"));
console.log('4:  ' + test.padBoth(10, "1234"));
console.log('5:  ' + test.padBoth(10, "12345"));
console.log('6:  ' + test.padBoth(10, "123456"));
console.log('7:  ' + test.padBoth(10, "1234567"));
console.log('8:  ' + test.padBoth(10, "12345678"));
console.log('9:  ' + test.padBoth(10, "123456789"));
console.log('10: ' + test.padBoth(10, "1234567890"));

console.log('\npadEnd, target length of 10');
console.log('1:  ' + test.padEnd(10, "1"));
console.log('2:  ' + test.padEnd(10, "12"));
console.log('3:  ' + test.padEnd(10, "123"));
console.log('4:  ' + test.padEnd(10, "1234"));
console.log('5:  ' + test.padEnd(10, "12345"));
console.log('6:  ' + test.padEnd(10, "123456"));
console.log('7:  ' + test.padEnd(10, "1234567"));
console.log('8:  ' + test.padEnd(10, "12345678"));
console.log('9:  ' + test.padEnd(10, "123456789"));
console.log('10: ' + test.padEnd(10, "1234567890"));

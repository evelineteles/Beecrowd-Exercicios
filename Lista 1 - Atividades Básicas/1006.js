var input = require('fs').readFileSync('1006', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var media = ((A * 2.0) + (B * 3.0) + (C * 5.0)) / 10;

console.log("MEDIA = " + media.toFixed(1));
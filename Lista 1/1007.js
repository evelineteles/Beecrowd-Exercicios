var input = require('fs').readFileSync('1007', 'utf8');
var lines = input.split('\n');

// Leia quatro valores inteiros (parseInt)

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

var diferenca = ((A * B) - (C * D));
console.log("DIFERENCA = " + diferenca);
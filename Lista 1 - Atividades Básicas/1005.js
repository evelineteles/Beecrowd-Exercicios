var input = require('fs').readFileSync('1005', 'utf8');
var lines = input.split('\n');

// Leia 2 valores de ponto flutuante - flutuante parseFloat, de dupla precisão A e B = 2 notas de um aluno.

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var media = ((A * 3.5) + (B * 7.5)) / 11

console.log( "MEDIA = " + media.toFixed(5))

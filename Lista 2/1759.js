var input = require('fs').readFileSync('1759', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var resultado = "";

for (var i = 0; i < N - 1; i++) {
  resultado += "Ho ";
}

resultado += "Ho!";

console.log(resultado);

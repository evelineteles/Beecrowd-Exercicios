var input = require('fs').readFileSync('1060', 'utf8');
var lines = input.split('\n');

var valores = [];
var qtdPositivos = 0;

for (var i = 0; i < 6; i++) {
  valores[i] = parseFloat(lines.shift());

  if (valores[i] > 0) {
    qtdPositivos++;
  }
}

console.log(qtdPositivos + " valores positivos");


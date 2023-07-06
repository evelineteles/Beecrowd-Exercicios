var input = require('fs').readFileSync('1065', 'utf8');
var lines = input.split('\n');

var valores = [];
var qtdpares = 0;

for (var i = 0; i < 5; i++) {
  valores[i] = parseInt(lines.shift());

  if (valores[i] % 2 === 0) {
    qtdpares++;
  }
}

console.log(qtdpares + " valores pares");
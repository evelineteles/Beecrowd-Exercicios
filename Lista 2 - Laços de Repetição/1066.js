var input = require('fs').readFileSync('1066', 'utf8');
var lines = input.split('\n');

var valores = [];
var qtdpares = 0;
var qtdimpares = 0;
var qtdpositivos = 0;
var qtdnegativos = 0;

for (var i = 0; i < 5; i++) {
  valores[i] = parseInt(lines.shift());

  if (valores[i] % 2 === 0) {
    qtdpares++;
  } else {
    qtdimpares++;
  }

  if (valores[i] > 0) {
    qtdpositivos++;
  } else if (valores[i] < 0) {
    qtdnegativos++;
  }
}

console.log(qtdpares + " valor(es) par(es)");
console.log(qtdimpares + " valor(es) impar(es)");
console.log(qtdpositivos + " valor(es) positivo(s)");
console.log(qtdnegativos + " valor(es) negativo(s)");
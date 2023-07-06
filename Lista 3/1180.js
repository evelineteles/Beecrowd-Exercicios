var input = require('fs').readFileSync('1180', 'utf8');
var lines = input.split('\n')


var N = parseInt(lines.shift());
var X = lines.shift().split(' ').map(Number);

var Menorvalor = X[0];
var Posicao = 0;

for (var i = 1; i < N; i++) {
  var n = parseInt(lines.shift());

  if (X[i] <Menorvalor) {
    Menorvalor = X[i];
    posicao = i;
  }
}

console.log("Menor valor: " + Menorvalor);
console.log("Posicao: " + posicao);
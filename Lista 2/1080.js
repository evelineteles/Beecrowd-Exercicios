var input = require('fs').readFileSync('1080', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift());
var positivos = numero;
var distintos = 1;

for (var i = 2; i <= 100; i++) {
  var n = parseInt(lines.shift());

  if (n > positivos) {
    positivos = n;
    distintos = i;
  }
}

console.log(positivos);
console.log(distintos);
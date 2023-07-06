var input = require('fs').readFileSync('1183', 'utf8');
var lines = input.split('\n')

var operacao = lines.shift();
var matriz = [];

for (var i = 0; i < 12; i++) {
  matriz[i] = [];
  for (var j = 0; j < 12; j++) {
    matriz[i][j] = parseFloat(lines.shift());
  }
}

var soma = 0;
var contador = 0;

for (var i = 0; i < 12; i++) {
  for (var j = i + 1; j < 12; j++) {
    soma += matriz[i][j];
    contador++;
  }
}

var resultado = operacao === 'S' ? soma : soma / contador;

console.log(resultado.toFixed(1));
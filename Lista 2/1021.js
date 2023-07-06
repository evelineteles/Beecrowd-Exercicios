var input = require('fs').readFileSync('1021', 'utf8');
var lines = input.split('\n');

var N = parseFloat(lines.shift());
var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];


console.log("NOTAS:");
for (var i = 0; i < notas.length; i++) {
    var qtdNotas = Math.floor(N / notas[i]);
    console.log(qtdNotas + " nota(s) de R$ " + notas[i].toFixed(2));
  N = N % notas[i];
}

console.log("MOEDAS:");
for (var i = 0; i < moedas.length; i++) {
    var qtdMoedas = Math.floor(N / moedas[i]);
  console.log(qtdMoedas + " moeda(s) de R$ " + moedas[i].toFixed(2));
  N = (N % moedas[i]).toFixed(2);
}
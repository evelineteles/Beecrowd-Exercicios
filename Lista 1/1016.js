var input = require('fs').readFileSync('1016', 'utf8');
var lines = input.split('\n');

var X = 60;
var Y = 90;
var distanciaDiferenca = parseInt(lines.shift());
var tempo = (distanciaDiferenca / (Y - X)) * 60;

console.log(tempo.toFixed(0) +" minutos");
var input = require('fs').readFileSync('1017', 'utf8');
var lines = input.split('\n');

var tempo = parseFloat(lines.shift());
var velocidademedia = parseFloat(lines.shift());
var automovel = 12;
var distanciapercorrida = ((tempo * velocidademedia) / automovel);

console.log(distanciapercorrida.toFixed(3));
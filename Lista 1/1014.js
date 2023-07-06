var input = require('fs').readFileSync('1014', 'utf8');
var lines = input.split('\n');

// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

var distancia = parseInt(lines.shift());
var totalcombustivel = parseFloat(lines.shift());
var consumomedio = distancia/totalcombustivel;

console.log(consumomedio.toFixed(3)) + " km/l";
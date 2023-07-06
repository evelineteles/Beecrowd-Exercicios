var input = require('fs').readFileSync('1078', 'utf8');
var lines = input.split('\n');


var N = parseInt(lines.shift());
var indice = 1;

while(indice < 11) {
    console.log(indice + " x " + N + " = " + N * indice);
    indice++;
}

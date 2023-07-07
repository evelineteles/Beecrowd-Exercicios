var input = require('fs').readFileSync('1175', 'utf8');
var lines = input.split('\n')

// N[20] = 20 valores inteiros
var N = [];

for (var i = 0; i < 20; i++) {
    var valor = parseInt(lines.shift());
    N.push(valor);
}

for (var i = 0; i < 10; i++) {
    var aux = N[i];
    N[i] = N[19 - i];
    N[19 - i] = aux;
}

for (var i = 0; i < 20; i++) {
    console.log("N[" + i + "] = " + N[i]);
}


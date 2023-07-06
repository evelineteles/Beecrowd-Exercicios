var input = require('fs').readFileSync('1172', 'utf8');
var lines = input.split('\n')

// X[10] = 10 valores inteiros
var vetor = [];

for (var i= 0; i < 10; i++) {
    var X = parseInt(lines.shift());
    vetor.push(X);
}
//substituir nulos e negativos
for (var i = 0; i < 10; i++) {
    if (vetor[i] <= 0) {
        vetor[i] = 1;
    }
}

for (var i = 0; i < 10; i++) {
    console.log("X[" + i + "] = " + vetor[i]);
}
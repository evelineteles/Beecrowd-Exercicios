var input = require('fs').readFileSync('1174', 'utf8');
var lines = input.split('\n')

// A[0010] = 100 valores inteiros
var vetor = [];

for (var i= 0; i < 100; i++) {
    vetor[i]= parseFloat(lines.shift());
   }

for (var i = 0; i < 100; i++) {
    if (vetor[i] <= 10) {
    console.log("A[" + i + "] = " + vetor[i].toFixed(1));
}
}
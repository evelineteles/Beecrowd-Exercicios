var input = require('fs').readFileSync('1018', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var notas = [100, 50, 20, 10, 5, 2, 1];

console.log(N);

console.log(parseInt(N / 100) + " nota(s) de R$ 100,00");
N = N % 100;
console.log(parseInt(N / 50) + " nota(s) de R$ 50,00");
N = N % 50;
console.log(parseInt(N / 20) + " nota(s) de R$ 20,00");
N = N % 20;
console.log(parseInt(N / 10) + " nota(s) de R$ 10,00");
N = N % 10;
console.log(parseInt(N / 5) + " nota(s) de R$ 5,00");
N = N % 5;
console.log(parseInt(N / 2) + " nota(s) de R$ 2,00");
N = N % 2;
console.log(parseInt(N / 1) + " nota(s) de R$ 1,00");
N = N % 1;
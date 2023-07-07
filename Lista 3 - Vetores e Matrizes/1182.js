var input = require('fs').readFileSync('1182', 'utf8');
var lines = input.split('\n')

// Pegando a coluna e a operação da primeira e segunda linha
var C = parseInt(lines.shift());
var T = lines.shift();
var M = [];



for (var i = 0; i < 12; i++) {//loop linha
    M[i] = [];
    for (var j = 0; j < 12; j++) { //loop coluna
        M[i][j] = parseFloat(lines.shift());
    }
}

// Calculando a média dos elementos da coluna especificada
var soma = 0;

for (var i = 0; i < 12; i++) {
    soma += M[i][C];
}    

var resultado = (T === 'M') ? (soma / 12) : soma;

console.log(resultado.toFixed(1));
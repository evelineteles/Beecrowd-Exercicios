var input = require('fs').readFileSync('1010', 'utf8');
var lines = input.split('\n');

// Ler o código de uma peça 1, o número de peças 1. O valor unitário de cada peça 1.
// O código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
// Após, calcule e mostre o valor a ser pago.

var peca1 = lines.shift().split(" ");
var peca2 = lines.shift().split(" ");


var codpeca1 = peca1.shift();
var quantpeca1 = peca1.shift();
var valorunitpeca1 = peca1.shift();
var valorTotalpeca1 = quantpeca1 * valorunitpeca1;

var codpeca2 = peca2.shift();
var quantpeca2 = peca2.shift()
var valorunitpeca2 = peca2.shift();
var valorTotalpeca2 = quantpeca2 * valorunitpeca2;

var valorTotal = valorTotalpeca1 + valorTotalpeca2;

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));

var input = require('fs').readFileSync('1009', 'utf8');
var lines = input.split('\n');

//Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro).

var nomevendedor = parseInt(lines.shift());
var salariofixo = parseInt(lines.shift());
var vendas = parseFloat(lines.shift());

var comissao = 0.15 * vendas

console.log("TOTAL = R$ " + (salariofixo + comissao).toFixed(2));


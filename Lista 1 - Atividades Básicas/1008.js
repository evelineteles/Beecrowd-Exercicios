var input = require('fs').readFileSync('1008', 'utf8');
var lines = input.split('\n');

// Leia o número de um funcionário; horas trabalhadas e salário

var numerofuncionario = parseInt(lines.shift());
var horastrabalhadas = parseInt(lines.shift());
var valorhora = parseFloat(lines.shift());

var salario = (horastrabalhadas * valorhora)

console.log("NUMBER = " + numerofuncionario);

console.log("SALARY = U$ " + salario.toFixed(2))


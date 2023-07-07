var input = require('fs').readFileSync('1051', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var IR = 0;

if (salario >=0 && salario <= 2000.00){
    console.log("Isento");
} else if (salario > 2000.00 && salario <= 3000.00){
    IR = (salario - 2000.00) * 0.08;
    console.log("R$ " + IR.toFixed(2));
} else if (salario > 3000.00 && salario <= 4500.00){
    IR = (salario - 3000.00) * 0.18 + (1000 * 0.08);
    console.log("R$ " + IR.toFixed(2));
} else if (salario > 4500.00){
    IR = (salario - 4500.00) * 0.28 + (1500 * 0.18) + (1000 * 0.08);
    console.log("R$ " + IR.toFixed(2));
} else {
    console.log("R$ " + IR.toFixed(2));
}

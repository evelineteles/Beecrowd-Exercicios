var input = require('fs').readFileSync('1011', 'utf8');
var lines = input.split('\n');

// A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.
// Math.pow(base, expoente)

var raio = parseFloat(lines.shift());
var pi = 3.14159;
var formula = (4/3.0) * pi * Math.pow(raio, 3);

console.log("VOLUME = " + formula.toFixed(3));


// simples
Math.pow(7, 2);    // 49
Math.pow(7, 3);    // 343
Math.pow(2, 10);   // 1024
// expoentes fracionários
Math.pow(4, 0.5);  // 2 (raiz quadrada de 4)
Math.pow(8, 1/3);  // 2 (raiz cúbica de 8)
Math.pow(2, 0.5);  // 1.4142135623730951 (raiz quadrada de 2)
Math.pow(2, 1/3);  // 1.2599210498948732 (raiz cúbica de 2)
// expoentes com sinais
Math.pow(7, -2);   // 0.02040816326530612 == (1/7)2 == (1/49)
Math.pow(8, -1/3); // 0.5 == (1/8)1/3 == 1/2
// bases com sinal
Math.pow(-7, 2);   // 49 (quadrados sempre são positivos)
Math.pow(-7, 3);   // -343 (cubos podem ser negativos conforme a base)
Math.pow(-7, 0.5); // NaN (números negativos não tem uma raiz quadrada real)
// devido ao fato que raízes "par" e "ímpar" são próximas,
// e limitam a precisão de ponto flutuante,
// bases negativas com expoentes fracionários sempre retornam NaN
Math.pow(-7, 1/3); // NaN

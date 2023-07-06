var input = require('fs').readFileSync('1019', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

var horas = Math.floor(N/ 3600); 
var minutos = Math.floor((N % 3600) / 60); 
var segundos = N % 60; 

console.log(horas + ":" + minutos + ":" + segundos);

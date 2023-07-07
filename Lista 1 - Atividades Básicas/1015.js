var input = require('fs').readFileSync('1015', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift(0).split(" ");
var p2 = lines.shift(1).split(" ");


var x1 = p1.shift();
var y1 = p1.shift();
var x2 = p2.shift();
var y2 = p2.shift();

var distancia = Math.sqrt((x2-x1) ** 2 + (y2-y1) ** 2);
console.log(distancia.toFixed(4));


// Math.hypot(x2-x1, y2-y1)
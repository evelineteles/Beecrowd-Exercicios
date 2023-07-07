var input = require('fs').readFileSync('1178', 'utf8');
var lines = input.split('\n')

// Leia X

var N = [];
var X = parseFloat(lines.shift());

for (var i = 0; i < 100; i++) {
    console.log("N[" + i + "] = " + (X).toLocaleString('en-US',{ minimumFractionDigits: 4 }).toString().replace(/,/g, ""));
    var X = (X/2);
}
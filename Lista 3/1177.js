var input = require('fs').readFileSync('1177', 'utf8');
var lines = input.split('\n')

// Ler T = valor inteiro 
var N =[];
var T = parseInt(lines.shift());

for (var i = 0; i < 10000; i++ ) {
    N[i] = i % T;

}

for (var i =0; i < 1000; i++) {
    console.log("N[" + i + "] = " + N[i]);
}



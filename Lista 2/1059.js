var input = require('fs').readFileSync('1059', 'utf8');
var lines = input.split('\n');

for (var numerospares = 1; numerospares <= 100; numerospares++) {
    if (numerospares % 2 === 0) {
      console.log(numerospares);
    }
  }

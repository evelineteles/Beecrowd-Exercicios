var input = require('fs').readFileSync('1067', 'utf8');
var lines = input.split('\n');

// X = (1 <= X <= 1000)//

var X = parseInt(lines.shift());

for (var i = 1; i <= X; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }


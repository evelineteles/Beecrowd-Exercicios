var input = require('fs').readFileSync('1052', 'utf8');
var lines = input.split('\n');

var mes = parseInt(lines.shift());
var nomeMes = " ";


if (mes === 1) {
    nomeMes = 'January';
} else if (mes === 2) {
    nomeMes = 'February';
} else if (mes === 3) {
    nomeMes = 'March';
} else if (mes === 4) {
    nomeMes = 'April';
} else if (mes === 5) {
    nomeMes = 'May';
} else if (mes === 6) {
    nomeMes = 'June';
} else if (mes === 7) {
    nomeMes = 'July';
} else if (mes === 8) {
    nomeMes = 'August';
} else if (mes === 9) {
    nomeMes = 'September';
} else if (mes === 10) {
    nomeMes = 'October';
} else if (mes === 11) {
    nomeMes = 'November';
} else if (mes === 12) {
    nomeMes = 'December';
}

console.log(nomeMes);


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

function calculo(a, b, c, d) {
    return (a * b) - (c * d);
}

let diferenca = calculo(a, b, c, d)

console.log("DIFERENCA = " + diferenca)
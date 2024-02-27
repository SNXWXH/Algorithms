const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('-');

let base = input[0].split('+').map(Number);
let cul = base.reduce((acc, cur) => acc + cur);
for (let i = 1; i < input.length; i++) {
  let basic = input[i]
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  cul -= basic;
}

console.log(cul);

const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

let [, findNum] = input[0].split(' ');
let num = input[1].split(' ').map(Number);

let sort = num.sort((a, b) => a - b);
let ans = sort[findNum - 1];

console.log(+ans);
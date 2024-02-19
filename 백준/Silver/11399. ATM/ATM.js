const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let culTime = [];
let before = 0;

let time = input
  .split(' ')
  .sort((a, b) => a - b)
  .map(Number);

for (let n of time) {
  before += n;
  culTime.push(before);
}

let ans = culTime.reduce((acc, cur) => acc + cur);
console.log(ans);

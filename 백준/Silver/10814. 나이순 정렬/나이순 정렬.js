const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let inputArr = input.map((v) => v.split(' '));
let sortArr = inputArr.sort((a, b) => a[0] - b[0]);

let ans = sortArr.map((v) => v.join(' '));
console.log(ans.join('\n'));

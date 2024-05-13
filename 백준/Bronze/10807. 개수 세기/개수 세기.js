const file = process.platform === 'linux' ? 0 : './input.txt';
let [n, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let arr = input[0];
let num = input[1];

let ans = 0;

arr.split(' ').map((v) => {
  if (+v === +num) ans++;
});

console.log(ans);

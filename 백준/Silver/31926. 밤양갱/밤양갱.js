const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(file)
  .toString()
  .trim();

let n = parseInt(input, 10);
let ans = 10;
let copySize = 1;

while (n >= copySize * 2) {
  ans += 1;
  copySize *= 2;
}

console.log(ans);

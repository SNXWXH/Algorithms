const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim();

let total = +input;
let flag = false;
let ans = 0;

while (total >= 0) {
  if (total === 0 || total % 5 === 0) {
    ans += total / 5;
    flag = true;
    console.log(ans);
    break;
  }
  total -= 3;
  ans += 1;
}

if (!flag) console.log(-1);

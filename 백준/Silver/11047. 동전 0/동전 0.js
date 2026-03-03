const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [FIRST, ...INPUT] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const MONEY = INPUT.sort((a, b) => b - a).map(Number);
let [n, k] = FIRST.split(' ').map(Number);
let ans = 0;

MONEY.forEach((money) => {
  let coin = k / money;

  if (coin >= 1) {
    ans += parseInt(k / money);
    k = k % money;
  }
});

console.log(ans);

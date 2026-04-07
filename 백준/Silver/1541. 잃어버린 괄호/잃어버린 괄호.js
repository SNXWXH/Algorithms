const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const MATH = require('fs').readFileSync(file).toString().trim().split('-');

let ans = [];

MATH.forEach((item) => {
  if (item.includes('+')) {
    let sum = 0;
    item = item.split('+').map(Number);
    item.forEach((i) => (sum += i));
    ans.push(sum);
  } else ans.push(+item);
});

console.log(ans.reduce((prev, cur) => prev - cur));

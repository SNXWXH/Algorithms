const file = process.platform === 'linux' ? 0 : './input.txt';
const count = require('fs').readFileSync(file).toString().trim();

const star = '*';
let ans = '';

for (let i = 1; i <= count; i++) {
  for (j = 1; j <= i; j++) {
    ans += star;
  }
  console.log(ans);
  ans = '';
}

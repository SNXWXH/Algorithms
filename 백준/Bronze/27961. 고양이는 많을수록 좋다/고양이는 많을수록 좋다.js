const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim();

let cnt = 0;
let cats = 0;
while (cats < input) {
  if (cats === 0) {
    cats++;
    cnt++;
  } else {
    cats = cats * 2;
    cnt++;
  }
}
console.log(cnt);

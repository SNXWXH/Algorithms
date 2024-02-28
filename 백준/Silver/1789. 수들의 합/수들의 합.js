const file = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(file).toString().trim();

let sum = 0;
let count = 0;

while (sum <= +input) {
  count += 1;
  sum += count;
}

console.log(count - 1);

const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let path = '';
let str = '';
let sub = '';
let count = Number(n);

for (let i = 0; i < n; i++) {
  str = arr[i];
  for (let j = 0; j < str.length; j++) {
    if (j === 0) continue;
    else path = str[j - 1];
    sub = str.slice(0, j + 1);
    if (path !== str[j] && sub.split(str[j]).length - 1 >= 2) {
      count--;
      break;
    }
  }
}

console.log(count);

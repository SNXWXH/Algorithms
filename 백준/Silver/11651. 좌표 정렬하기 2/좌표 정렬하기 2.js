const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const compare = (a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
};

let inputArr = input.map((v) => v.split(' ').map(Number));
let sort = inputArr.sort(compare);

let ans = '';
sort.map((v) => (ans += v[0] + ' ' + v[1] + '\n'));
console.log(ans);

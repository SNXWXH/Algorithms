const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [N, INPUT] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const NUM = INPUT.split(' ').map(Number);
const SORT_NUM = [...new Set(NUM)].sort((a, b) => a - b);

const OBJ = {};
SORT_NUM.map((v, i) => (OBJ[v] = i));

let ans = '';
NUM.map((v) => (ans += OBJ[v] + ' '));

console.log(ans);

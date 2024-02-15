const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let inputArr = input.split(' ').map(Number);
let setArr = [...new Set(inputArr)].sort((a, b) => a - b);

let dic = {};
setArr.map((v, i) => (dic[v] = i));

let ans = '';
inputArr.map((v) => (ans += dic[v] + ' '));

console.log(ans);
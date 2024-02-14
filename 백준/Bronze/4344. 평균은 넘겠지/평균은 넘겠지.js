const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

let ans = [];

input.map((v) => {
  const arr = v.split(' ').map(Number);
  const sum = arr.slice(1).reduce((sum, current) => sum + current, 0);
  const avg = sum / (arr.length - 1);
  const student = arr.slice(1).filter((score) => score > avg).length;

  const studentAvg = ((student / (arr.length - 1)) * 100).toFixed(3);
  ans.push(studentAvg + '%');
});

console.log(ans.slice(1).join('\n'));

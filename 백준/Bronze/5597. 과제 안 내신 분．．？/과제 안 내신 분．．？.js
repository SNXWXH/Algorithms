const file = process.platform === 'linux' ? 0 : './input.txt';
const student = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let arrNum = [];
for (let i = 1; i <= 30; i++) {
  arrNum.push(i);
}

const ans = arrNum.filter((v) => !student.includes(v));

console.log(ans.join('\n'));
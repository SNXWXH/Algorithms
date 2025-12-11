const file = process.platform === 'linux' ? 0 : './input.txt';
const numberArray = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const maxNum = Math.max(...numberArray);
const numIdx = numberArray.indexOf(maxNum) + 1;

console.log(maxNum + '\n' + numIdx);
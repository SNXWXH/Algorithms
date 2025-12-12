const file = process.platform === 'linux' ? 0 : './input.txt';
const [A, B, C] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const multi = String(A * B * C).split('');
let numArray = new Array(10).fill(0);

multi.forEach((num) => {
  numArray[+num]++;
});

console.log(numArray.join('\n'));

const file = process.platform === 'linux' ? 0 : './input.txt';
const [A, B] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(A + B);
const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [N, NUMBER] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const P = NUMBER.split(' ').map(Number);
const TIME_SUM = [];

const SORT_P = P.sort((a, b) => a - b);

SORT_P.reduce((acc, cur) => {
  const sum = acc + cur;
  TIME_SUM.push(sum);
  return sum;
}, 0);

const ANS = TIME_SUM.reduce((acc, cur) => (acc += cur));

console.log(ANS);

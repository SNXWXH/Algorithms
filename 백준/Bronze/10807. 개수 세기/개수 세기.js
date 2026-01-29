const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [N, INPUT, V] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const NUMARR = INPUT.split(' ').map(Number);
const ANS = NUMARR.filter((num) => num === +V);

console.log(ANS.length);

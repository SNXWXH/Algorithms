const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

input.map((v) => console.log(+v[0] + +v[2]));

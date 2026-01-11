const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [N, ...INPUT] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const SET_INPUT = [...new Set(INPUT)];

const SORT_INPUT = SET_INPUT.sort((a, b) =>
  a.length !== b.length ? a.length - b.length : a.localeCompare(b)
);

console.log(SORT_INPUT.join('\n'));

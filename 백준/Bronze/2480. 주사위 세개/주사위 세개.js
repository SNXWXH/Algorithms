const file = process.platform === 'linux' ? 0 : './input.txt';
const array = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const SET = [...new Set(array)];

if (SET.length === 3) console.log(Math.max(...array) * 100);
if (SET.length === 1) console.log(10000 + array[0] * 1000);

if (SET.length === 2) {
  let count = array.filter((e) => e === SET[0]);

  if (count.length === 2) console.log(1000 + SET[0] * 100);
  if (count.length === 1) console.log(1000 + SET[1] * 100);
}

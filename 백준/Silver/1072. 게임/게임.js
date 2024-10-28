const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

if (x === y) {
  console.log(-1);
} else {
  const target = Math.floor((y * 100) / x) + 1;

  if (target === 100) {
    console.log(-1);
  } else {
    const addWin = Math.ceil((target * x - 100 * y) / (100 - target));
    console.log(addWin);
  }
}

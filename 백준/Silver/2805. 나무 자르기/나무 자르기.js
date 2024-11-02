const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const [N, M] = n.split(' ').map(Number);
const tree = input[0].split(' ').map(Number);

let low = 0;
let high = Math.max(...tree);

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let wood = tree.reduce((pre, cur) => pre + Math.max(0, cur - mid), 0);

  if (wood >= M) low = mid + 1;
  else high = mid - 1;
}

console.log(high);
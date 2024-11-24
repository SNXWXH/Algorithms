const file = process.platform === 'linux' ? 0 : './input.txt';
const [N, input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let inputs = input.split(' ').map((v) => Number(v));
const memo = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIdx = -1;

  for (let j = 0; j < i; j++) {
    if (inputs[i] > inputs[j] && memo[j] > max) {
      max = memo[j];
      maxIdx = j;
    }
  }
  memo[i] = maxIdx === -1 ? inputs[i] : inputs[i] + memo[maxIdx];
}

console.log(Math.max(...memo));

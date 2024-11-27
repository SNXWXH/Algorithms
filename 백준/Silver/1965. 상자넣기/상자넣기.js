const file = process.platform === 'linux' ? 0 : './input.txt';
const [N, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const boxes = input[0].split(' ').map(Number);

const dp = Array(Number(N)).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (boxes[j] < boxes[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

const answer = Math.max(...dp);

console.log(answer);

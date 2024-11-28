const file = process.platform === 'linux' ? 0 : './input.txt';
const [N, input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const arr = input.split(' ').map((i) => +i);

const increaseDP = new Array(N).fill(1);
const decreaseDP = new Array(N).fill(1);

// 증가 DP 구하기
for (let i = 0; i < N; i++) {
  const cur = arr[i];
  let cnt = 1;
  for (let j = 0; j < i; j++) {
    const compare = arr[j];
    if (cur > compare) cnt = Math.max(cnt, increaseDP[j] + 1);
  }
  increaseDP[i] = cnt;
}

// 감소 DP 구하기
for (let i = N - 1; i >= 0; i--) {
  const cur = arr[i];
  let cnt = 1;
  for (let j = i + 1; j < N; j++) {
    const compare = arr[j];
    if (cur > compare) cnt = Math.max(cnt, decreaseDP[j] + 1);
  }
  decreaseDP[i] = cnt;
}

console.log(
  Math.max(...increaseDP.map((incVal, index) => incVal + decreaseDP[index])) - 1
);

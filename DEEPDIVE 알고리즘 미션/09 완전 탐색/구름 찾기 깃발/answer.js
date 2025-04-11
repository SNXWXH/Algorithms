const solution = (N, K, arr) => {
  const di = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dj = [-1, 0, 1, -1, 1, -1, 0, 1];
  let ans = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1) continue;

      let count = 0;
      for (let d = 0; d < 8; d++) {
        const ni = i + di[d];
        const nj = j + dj[d];

        if (ni >= 0 && ni < N && nj >= 0 && nj < N && arr[ni][nj] === 1)
          count++;
      }

      if (count === K) ans++;
    }
  }

  console.log(ans);
};

const readline = require('readline');

(async () => {
  const rl = require('readline').createInterface({ input: process.stdin });
  const input = [];

  for await (const line of rl) {
    input.push(line.trim());
    if (input.length === 1 + parseInt(input[0].split(' ')[0])) {
      rl.close();
    }
  }

  const [N, K] = input[0].split(' ').map(Number);
  const arr = input.slice(1).map((v) => v.split(' ').map(Number));

  solution(N, K, arr);
  process.exit();
})();

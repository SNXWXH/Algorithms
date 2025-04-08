const readline = require('readline');

const solution = (N, data) => {
  data.sort((a, b) => a.point[0] - b.point[0] || a.point[1] - b.point[1]);

  const res = Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    res[data[i].idx] = N - i - 1;
  }

  console.log(res.join('\n'));
};

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  const lines = [];

  for await (const line of rl) {
    lines.push(line);
  }

  const N = +lines[0];
  const data = [];

  for (let i = 1; i <= N; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    data.push({ point: [x, y], idx: i - 1 });
  }

  solution(N, data);
})();

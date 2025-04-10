const solution = (K) => {
  const moves = [];

  const hanoi = (n, start, end, via) => {
    if (n === 1) {
      moves.push([start, end]);
      return;
    }
    hanoi(n - 1, start, via, end);
    moves.push([start, end]);
    hanoi(n - 1, via, end, start);
  };

  hanoi(20, 0, 2, 1);

  const sticks = Array.from({ length: 3 }, () => []);

  for (let i = 20; i >= 1; i--) {
    sticks[0].push(i);
  }

  for (let i = 0; i < K; i++) {
    const [start, end] = moves[i];
    const disk = sticks[start].pop();
    sticks[end].push(disk);
  }

  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push(sticks[i].reduce((a, b) => a + b, 0));
  }

  console.log(result.join(' '));
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    solution(+line);
    rl.close();
  }

  process.exit();
})();

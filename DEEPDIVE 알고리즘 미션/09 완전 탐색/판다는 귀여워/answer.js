const solution = (N, M, K, panda) => {
  let min = Infinity;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      let isPanda = panda.some(([R, C]) => R === r && C === c);
      if (isPanda) continue;

      let bad = 0;
      for (let [R, C] of panda) {
        bad += (r - R) ** 2 + (c - C) ** 2;
      }

      if (bad < min) min = bad;
    }
  }

  console.log(min);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    input.push(line);
    rl.close();
  }

  const [N, M, K] = input[0].split(' ').map(Number);
  let panda = [];
  for (let i = 1; i <= K; i++) {
    panda.push(input[i].split(' ').map((x) => Number(x) - 1));
  }

  solution(N, M, K, panda);
  process.exit();
})();

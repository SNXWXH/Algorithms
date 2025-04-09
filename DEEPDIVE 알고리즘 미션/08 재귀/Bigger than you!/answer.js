const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    input.push(line.trim());
    if (input.length === 3) rl.close();
  }

  const N = parseInt(input[0]);
  const A = input[1].split(' ').map(Number);
  const K = parseInt(input[2]);

  let ans = Infinity;
  let cur = 0;

  const solution = (cur) => {
    if (cur > K) {
      ans = Math.min(ans, cur);
      return;
    }

    for (let i = 0; i < N; i++) {
      let nxt = cur * 10 + A[i];
      if (nxt === 0) continue;
      solution(nxt);
    }
  };

  solution(0);
  console.log(ans);

  process.exit();
})();

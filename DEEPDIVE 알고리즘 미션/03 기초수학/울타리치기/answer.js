const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];

  for await (const line of rl) {
    input.push(line);
    if (input.length === 2) rl.close();
  }

  const N = +input[0];
  const arr = input[1].split(' ').map((v) => Number(v));

  let ans = 2 * N + arr[0] + arr[arr.length - 1];

  for (let i = 0; i < N - 1; i++) {
    ans += Math.abs(arr[i] - arr[i + 1]);
  }

  console.log(ans);

  process.exit();
})();

const readline = require('readline');

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  const input = [];

  for await (const line of rl) {
    input.push(line.trim());
    if (input.length === 2) rl.close();
  }

  const N = parseInt(input[0], 10);
  const H = input[1].split(' ').map(Number);
  let result = 0;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    while (cnt && H[i] > 0) {
      H[i] -= cnt + 1;
      cnt = (cnt + 1) % 4;
      result += 1;
    }

    if (H[i] <= 0) continue;

    let q = Math.floor(H[i] / 10);
    H[i] = H[i] % 10;
    result += 4 * q;

    while (H[i] > 0) {
      H[i] -= cnt + 1;
      cnt = (cnt + 1) % 4;
      result += 1;
    }
  }

  console.log(result);

  process.exit();
})();

const solution = (N, data) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < N; i++) {
    let ans = 0;
    while (!isPrime(data[i] - ans)) ans++;

    console.log(ans);
  }
};

const readline = require('readline');
let N = null;
let count = 0;
const data = [];

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      data.push(+line);
      count++;
    }

    if (N === count) rl.close();
  }

  solution(N, data);
  process.exit();
})();

const solution = (N, data) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const ans = data.map((v) => (isPrime(v) ? 'Yes' : 'No'));
  console.log(ans.join('\n'));
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

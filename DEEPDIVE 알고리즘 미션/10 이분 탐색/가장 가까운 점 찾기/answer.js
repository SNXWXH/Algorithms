const solution = (N, Q, X, queries) => {
  X.sort((a, b) => (a < b ? -1 : 1));

  for (const p of queries) {
    let start = 0;
    let end = N - 1;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (X[mid] < p) start = Number(mid + 1);
      else end = Number(mid);
    }

    if (start === 0) console.log(X[start].toString());
    else {
      const prev = X[start - 1];
      const curr = X[start];
      const diffPrev = p > prev ? p - prev : prev - p;
      const diffCurr = p > curr ? p - curr : curr - p;

      if (diffPrev <= diffCurr) console.log(prev.toString());
      else console.log(curr.toString());
    }
  }
};

const readline = require('readline');

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  const input = [];

  for await (const line of rl) {
    input.push(line.trim());
  }

  const [N, Q] = input[0].split(' ').map(Number);
  const X = input[1].split(' ').map(BigInt);
  const queries = input.slice(2).map(BigInt);

  solution(N, Q, X, queries);

  process.exit();
})();

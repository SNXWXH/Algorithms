const solution = (N, data) => {
  const sortedData = [...data].sort((a, b) => +b[1] - +a[1]);
  const maxPrice = sortedData[0][1];
  const lowPrice = sortedData[N - 1][1];

  const ans = data
    .filter(([_, value]) => value === maxPrice || value === lowPrice)
    .sort((a, b) => +b[1] - +a[1]);

  console.log(ans.map((v) => v.join(' ')).join('\n'));
};

const readline = require('readline');
let N = null;
let count = 0;
const data = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      data.push(line.split(' ').map((el) => el));
      count += 1;
    }
    if (N === count) rl.close();
  }
  solution(N, data);
  process.exit();
})();

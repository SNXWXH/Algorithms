const solution = (N, data) => {
  let ans = 0;
  data.forEach((v) => {
    const minNum = Math.min(...v);
    const maxNum = Math.max(...v);

    if (minNum * 1.6 <= maxNum && minNum * 1.63 >= maxNum) ans++;
  });

  console.log(ans);
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
      data.push(line.split(' ').map((el) => +el));
      count += 1;
    }
    if (N === count) rl.close();
  }
  solution(N, data);
  process.exit();
})();

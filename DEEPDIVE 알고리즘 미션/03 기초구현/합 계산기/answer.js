const solution = (N, data) => {
  const ans = data.reduce((acc, v) => {
    const [a, sign, b] = v;

    const result =
      sign === '+'
        ? +a + +b
        : sign === '-'
        ? +a - +b
        : sign === '*'
        ? +a * +b
        : parseInt(+a / +b);

    return acc + result;
  }, 0);

  console.log(ans);
};

// for문으로 풀기
const solution1 = (N, data) => {
  let ans = 0;

  data.forEach((v) => {
    const [a, sign, b] = v;
    if (sign === '+') ans += +a + +b;
    if (sign === '-') ans += +a - +b;
    if (sign === '*') ans += +a * +b;
    if (sign === '/') ans += parseInt(+a / +b);
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
      data.push(line.split(' ').map((el) => el));
      count += 1;
    }
    if (N === count) rl.close();
  }
  solution(N, data);
  process.exit();
})();

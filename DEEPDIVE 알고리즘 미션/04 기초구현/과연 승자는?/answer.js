const solution = (N, data) => {
  const [arrA, arrB] = data;
  let ans = [0, 0];

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] === arrB[i]) {
      ans[0]++;
      ans[1]++;
      continue;
    }

    if (Math.abs(arrA[i] - arrB[i]) === 7) {
      arrA[i] > arrB[i]
        ? ((ans[0] -= 1), (ans[1] += 3))
        : ((ans[0] += 3), (ans[1] -= 1));
      continue;
    }
    ans[arrA[i] > arrB[i] ? 0 : 1] += 2;
  }
  console.log(ans.join(' '));
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

const solution = (N, arr, M, data) => {
  const result = [];

  arr.sort((a, b) => a - b);

  data.forEach((v) => {
    let left = 0;
    let right = N - 1;
    let exist = false;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === v) {
        exist = true;
        break;
      }
      if (arr[mid] < v) left = mid + 1;
      else right = mid - 1;
    }

    result.push(exist ? 1 : 0);
  });

  console.log(result.join('\n'));
};

(async () => {
  const readline = require('readline');
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    input.push(line);
    if (input.length === 3 + Number(input[2])) rl.close();
  }

  const N = +input[0];
  const arr = input[1].split(' ').map(Number);
  const M = +input[2];
  let data = input.slice(3, 3 + M).map(Number);

  solution(N, arr, M, data);

  //* 시간초과
  // data.forEach((v) => {
  //   arr.includes(v) ? console.log(1) : console.log(0);
  // });

  process.exit();
})();

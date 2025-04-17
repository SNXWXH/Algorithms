const solution = (N, input) => {
  input.sort((a, b) => a - b);

  let ans = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      const sum = input[i] + input[j];

      let left = j + 1;
      let right = N - 1;
      let idx = j;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (input[mid] <= sum) {
          idx = mid;
          left = mid + 1;
        } else right = mid - 1;
      }

      ans += idx - j;
    }
  }

  console.log(ans);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let input = [];

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      input.push(line);
    }
    if (input.length === N) rl.close();
  }

  input = input[0].split(' ').map(Number);

  solution(N, input);

  process.exit();
})();

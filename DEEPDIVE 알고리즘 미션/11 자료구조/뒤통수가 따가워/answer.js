const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    input.push(line);
    if (input.length === 2) rl.close();
  }

  let N = +input[0];
  let h = input[1].split(' ').map(Number);
  let stack = [];
  let ans = '';

  for (let i = 0; i < N; i++) {
    ans += stack.length + ' ';

    while (stack.length && h[stack[stack.length - 1]] <= h[i]) {
      stack.pop();
    }

    stack.push(i);
  }

  console.log(ans.trim());
})();

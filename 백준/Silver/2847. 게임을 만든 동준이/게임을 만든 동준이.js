const file = process.platform === 'linux' ? 0 : './input.txt';
const [N, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let ans = 0;

for (let i = N - 2; i >= 0; i--) {
  if (input[i] >= input[i + 1]) {
    const decrease = input[i] - input[i + 1] + 1;
    input[i] -= decrease;
    ans += decrease;
  }
}

console.log(ans);

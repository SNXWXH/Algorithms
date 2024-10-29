const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let ans = [];

for (let i = 0; i < n; i++) {
  const stoneNum = input[i];

  let left = 1;
  let right = stoneNum;
  let maxJump = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = (mid * (mid + 1)) / 2;

    if (sum <= stoneNum) {
      maxJump = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  ans.push(maxJump);
}
console.log(ans.join('\n'));

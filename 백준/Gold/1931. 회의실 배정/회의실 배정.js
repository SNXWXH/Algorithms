const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 끝나는 시간이 빠른 것부터 우선 배치하는 것이 나음
const N = input[0];
const I = [];

for (let i = 1; i < input.length; i++) {
  I.push(input[i].split(' ').map(Number));
}

// 끝나는 시간으로 정렬해서 겹치면 스킵
// 1순위: 끝나는 시간 오름차순
// 2순위: 끝나는 시간이 같으면 시작 시간 오름차순

I.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let ans = 0;
let lastEnd = 0;

for (const [start, end] of I) {
  if (start >= lastEnd) {
    ans++;
    lastEnd = end;
  }
}

console.log(ans);

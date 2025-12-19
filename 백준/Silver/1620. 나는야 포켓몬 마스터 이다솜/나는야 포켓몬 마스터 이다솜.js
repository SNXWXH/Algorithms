const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const INPUT = require('fs').readFileSync(file).toString().trim().split('\n');

const [N, M] = INPUT[0].split(' ').map(Number);

const NUM_TO_NAME = [];
const NAME_TO_NUM = {};

for (let i = 1; i <= N; i++) {
  NUM_TO_NAME[i] = INPUT[i];
  NAME_TO_NUM[INPUT[i]] = i;
}

const ANS = [];
// isNan이 true면 한글이란 소리 -> 숫자로 바꿔서 내기
// isNan이 false면 숫자란 소리 -> 한글로 바꿔서 내기
for (let i = N + 1; i <= N + M; i++) {
  isNaN(INPUT[i])
    ? ANS.push(NAME_TO_NUM[INPUT[i]])
    : ANS.push(NUM_TO_NAME[+INPUT[i]]);
}

console.log(ANS.join('\n'));

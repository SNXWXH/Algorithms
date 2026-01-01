const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [N_C, NUMBER] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const [N, C] = N_C.split(' ').map(Number);
const NUMBERS = NUMBER.split(' ');

let obj = {};

NUMBERS.forEach((num, idx) => {
  if (!obj[num])
    obj[num] = {
      cnt: 0,
      idx: idx,
    };

  obj[num].cnt += 1;
});

const ENTRIES = Object.entries(obj);

ENTRIES.sort((a, b) => {
  if (b[1].cnt !== a[1].cnt) return b[1].cnt - a[1].cnt;
  return a[1].idx - b[1].idx;
});

const ANS = [];

ENTRIES.forEach(([num, info]) => {
  for (let i = 0; i < info.cnt; i++) {
    ANS.push(num);
  }
});

console.log(ANS.join(' '));

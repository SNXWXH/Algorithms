const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const INPUT = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const NUM = [];
for (let i = 1; i <= 30; i++) {
  NUM.push(i);
}

const ANS = NUM.filter((num) => !INPUT.includes(num));

console.log(ANS.join('\n'));

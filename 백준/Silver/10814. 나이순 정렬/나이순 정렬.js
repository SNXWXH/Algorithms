const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [N, ...INPUT] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const USER = INPUT.map((v) => v.split(' '));

const SORT_USER = USER.sort((userA, userB) => {
  if (userA[0] === userB[0]) return userA[0] - userB[0];
  return userA[0] - userB[0];
});

const ANS = SORT_USER.map((v) => v.join(' '));
console.log(ANS.join('\n'));

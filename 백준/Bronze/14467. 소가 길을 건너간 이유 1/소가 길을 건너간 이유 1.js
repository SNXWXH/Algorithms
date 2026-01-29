const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [N, ...INPUT] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const OBJ = {};

INPUT.map((v) => {
  const [COW, DIR] = v.split(' ').map(Number);
  !OBJ[COW] ? (OBJ[COW] = [DIR]) : OBJ[COW].push(DIR);
});

let ans = 0;

for (let key in OBJ) {
  if (OBJ[key].length > 1) {
    let before = OBJ[key][0];
    for (let i = 1; i < OBJ[key].length; i++) {
      if (before !== OBJ[key][i]) {
        ans++;
        before = OBJ[key][i];
      }
    }
  }
}

console.log(ans);

const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const [NM, BASE, ...INPUT] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);
let light = BASE.split(' ').map(Number);

for (let i = 0; i < INPUT.length; i++) {
  const [CMD, l, r] = INPUT[i].split(' ').map(Number);

  if (CMD === 1) light[l - 1] = r;
  if (CMD === 2) {
    for (let j = l - 1; j <= r - 1; j++) {
      light[j] = light[j] === 0 ? 1 : 0;
    }
  }
  if (CMD === 3) {
    for (let j = l - 1; j <= r - 1; j++) {
      light[j] = 0;
    }
  }
  if (CMD === 4) {
    for (let j = l - 1; j <= r - 1; j++) {
      light[j] = 1;
    }
  }
}

console.log(light.join(' '));

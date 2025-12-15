const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const [num, str] = input[i].split(' ');

  const P = str.split('').reduce((acc, cur) => acc + cur.repeat(+num), '');
  console.log(P);
}

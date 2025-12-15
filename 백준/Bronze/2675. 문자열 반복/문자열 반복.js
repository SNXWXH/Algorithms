const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

let ans = [];

for (let i = 1; i < input.length; i++) {
  const [num, str] = input[i].split(' ');
  let P = '';
  const splitStr = str.split('');
  splitStr.forEach((v) => (P += v.repeat(+num)));
  ans.push(P);
}

console.log(ans.join('\n'));

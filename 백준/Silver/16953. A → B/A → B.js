const file = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(file).toString().trim();

let [init, final] = input.split(' ').map(Number);

let flag = false;
let result = 1;

while (init <= final) {
  if (init == final) {
    flag = true;
    break;
  }
  if (final % 2 == 0) final = Math.floor(final / 2);
  else if (final % 10 == 1) final = Math.floor(final / 10);
  else break;
  result++;
}
if (flag) console.log(result);
else console.log(-1);

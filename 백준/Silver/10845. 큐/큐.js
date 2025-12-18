const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

const QUEUE = [];
let ans = [];

for (let i = 1; i <= +input[0]; i++) {
  let cmd = input[i].split(' ');
  switch (cmd[0]) {
    case 'push':
      QUEUE.push(cmd[1]);
      break;
    case 'pop':
      ans.push(QUEUE.shift() || -1);
      break;
    case 'size':
      ans.push(QUEUE.length);
      break;
    case 'empty':
      ans.push(QUEUE[0] ? 0 : 1);
      break;
    case 'front':
      ans.push(QUEUE[0] || -1);
      break;
    case 'back':
      ans.push(QUEUE[QUEUE.length - 1] || -1);
      break;
  }
}

console.log(ans.join('\n'));

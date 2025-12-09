const file = process.platform === 'linux' ? 0 : './input.txt';
const [A, B] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (A > B) console.log('>');
else if (A < B) console.log('<');
else console.log('==');
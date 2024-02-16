const file = process.platform === 'linux' ? 0 : './input.txt';
const [a, b] = require('fs').readFileSync(file).toString().trim().split('\n');

console.log(+a + +b);

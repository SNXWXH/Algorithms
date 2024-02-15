const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('');

let ans = input.sort((a, b) => b - a).join('');
console.log(ans);

const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

const num = input.slice(1, input.length);
let ans = num.sort((a, b) => a - b).join('\n');

console.log(ans);

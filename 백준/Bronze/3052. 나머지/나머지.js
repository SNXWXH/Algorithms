const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim().split('\n');

let rest = [];
input.map((n) => rest.push(n % 42));

let ans = [...new Set(rest)].length;
console.log(ans);

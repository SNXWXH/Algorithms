const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim();

let num = input.split(' ');
let sort = num.sort((a, b) => a - b);

console.log(sort.join(' '));

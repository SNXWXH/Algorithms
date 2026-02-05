const file = process.platform === 'linux' ? 0 : './INPUT.txt';
const NUM = require('fs').readFileSync(file).toString().trim().split('');

console.log(NUM.sort((a, b) => b - a).join(''));

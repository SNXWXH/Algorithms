const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim('');

+input % 2 === 0 ? console.log('CY') : console.log('SK');

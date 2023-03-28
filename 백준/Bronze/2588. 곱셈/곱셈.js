let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = input[1];

let b1 = b[2];
let b2 = b[1]; 
let b3 = b[0];

let answer = '';
answer += Number(a) * Number(b1)+"\n";
answer += Number(a) * Number(b2)+"\n";
answer += Number(a) * Number(b3)+"\n";
answer += Number(a) * Number(b);

console.log(answer);

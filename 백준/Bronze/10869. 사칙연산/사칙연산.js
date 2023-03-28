let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ');
let a = Number(data[0]);
let b = Number(data[1]);
let answer = '';

answer += a+b+"\n";
answer += a-b+"\n";
answer += a*b+"\n";
answer += Math.floor(a/b)+"\n";
answer += Math.floor(a%b)+"\n";

console.log(answer);
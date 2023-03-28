const file = 
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let money;

if ((a==b)&&(b==c)) {
    money = 10000 + (a*1000);
 }
 else if ((a==b) || (b==c) || (a==c)) {
    if (a==b)
       money = 1000 + (a*100);
    else if (b==c)
       money = 1000 + (b*100);
    else
        money = 1000 + (c*100);
 }
 else {
    let max = a;
    if(max<b) max = b;
    if(max<c) max = c;
    money = max*100;
 }
console.log(money);
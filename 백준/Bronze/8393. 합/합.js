const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

const A = Number(input);
let sum = 0;
for(let i = 1; i <= A; i++) sum += i;
console.log(sum);
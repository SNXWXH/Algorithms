const file = process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let array = [];

for (i = 0; i <= 9; i++) array.push(input[i] % 42);

let set = new Set(array);

let answer = [...set];

console.log(answer.length);
const file = process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let max = input[0];
let n = 0;

for (let i = 0; i < 9; i++) {
  if (input[i] > max) {
    max = input[i];
    n = i;
  }
}

console.log(max + "\n" + (n + 1));
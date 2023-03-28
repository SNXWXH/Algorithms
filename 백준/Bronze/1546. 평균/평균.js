const file = process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let n = input[0];
let score = input[1].split(" ").map(Number);

score.sort((a, b) => b - a);

let m = score[0];
let newScore = score.map((score) => (score / m) * 100);

let sum = 0;
for (let i = 0; i < n; i++) sum += newScore[i];
console.log(sum / n);

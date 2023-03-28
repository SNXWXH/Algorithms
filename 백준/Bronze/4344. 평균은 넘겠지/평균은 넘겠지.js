const file = process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let sum = 0;
  let count = 0;

  let scores = input[i].split(" ").map(Number);
  let n = scores[0];

  for (let j = 1; j <= n; j++) {
    sum += scores[j];
  }
  let avg = sum / n;
  for (let k = 1; k <= n; k++) {
    if (scores[k] > avg) {
      count++;
    }
  }
  console.log(((count / n) * 100).toFixed(3) + "%");
}
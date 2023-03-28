const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let count = Number(input[0]);
let answer= "";
for (let i = 1; i<input.length; i++) {
    let A = Number(input[i].split(" ")[0]);
    let B = Number(input[i].split(" ")[1]);
    answer += A+B+("\n")
}
console.log(answer);
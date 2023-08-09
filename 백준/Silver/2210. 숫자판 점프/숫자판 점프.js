const file = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

let N = input.length;
const map = input.map((v) => v.split(" "));

let ans = new Set();
let dy = [-1, 0, 1, 0];
let dx = [0, -1, 0, 1];

const isValid = (y, x) => 0 <= y && y < N && 0 <= x && x < N;

const dfs = (y, x, depth, str) => {
  if (depth === 6) return ans.add(str);

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (isValid(ny, nx)) dfs(ny, nx, depth + 1, str + map[ny][nx]);
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    dfs(i, j, 1, map[i][j]);
  }
}

console.log(ans.size);

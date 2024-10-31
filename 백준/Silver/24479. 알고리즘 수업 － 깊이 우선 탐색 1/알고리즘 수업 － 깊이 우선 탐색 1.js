const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

const [N, M, R] = n.split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(0);
let cnt = 1;

arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.forEach((v) => v.sort((a, b) => a - b));

const dfs = (node) => {
  if (!visited[node]) {
    visited[node] = cnt;
    cnt++;
    for (const next of graph[node]) {
      dfs(next);
    }
  }
};

dfs(R);

console.log(visited.slice(1).join('\n'));

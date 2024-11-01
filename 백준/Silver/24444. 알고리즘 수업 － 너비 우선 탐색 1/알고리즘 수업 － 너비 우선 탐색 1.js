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
let order = 1;

for (const v of arr) {
  const [a, b] = v;
  graph[a].push(b);
  graph[b].push(a);
}

for (const edges of graph) {
  edges.sort((a, b) => a - b);
}

const bfs = (start) => {
  const queue = [start];
  visited[start] = order++;

  while (queue.length) {
    const node = queue.shift();

    for (const v of graph[node]) {
      if (!visited[v]) {
        queue.push(v);
        visited[v] = order++;
      }
    }
  }
};

bfs(R);

console.log(visited.slice(1).join('\n'));

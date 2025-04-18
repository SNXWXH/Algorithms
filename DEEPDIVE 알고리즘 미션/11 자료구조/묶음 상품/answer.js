const solution = (N, M, input) => {
  const parent = Array.from({ length: N + 1 }, (_, i) => i);
  let count = N;

  const find = (v) => {
    if (parent[v] !== v) parent[v] = find(parent[v]);
    return parent[v];
  };

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    if (rootA < rootB) parent[rootB] = rootA;
    else parent[rootA] = rootB;
    return true;
  };

  for (const [a, b] of input) {
    if (union(a, b)) count--;
  }

  console.log(count);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];
  let N = null;
  let M = null;

  for await (const line of rl) {
    if (!N && !M) [N, M] = line.split(' ').map(Number);
    else input.push(line.split(' ').map(Number));

    if (input.length === M) rl.close();
  }

  solution(N, M, input);
  process.exit();
})();

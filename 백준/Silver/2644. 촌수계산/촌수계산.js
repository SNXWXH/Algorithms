const file = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...input] = require('fs').readFileSync(file).toString().trim().split('\n');

const totalPeople = parseInt(n);
const [start, end] = input[0].split(' ').map(Number);
const m = parseInt(input[1]);

const relations = Array.from({ length: totalPeople + 1 }, () => []);
for (let i = 2; i < 2 + m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  relations[x].push(y);
  relations[y].push(x);
}

function findKinship(start, end) {
  const visited = Array(totalPeople + 1).fill(false);
  const queue = [[start, 0]];
  visited[start] = true;

  while (queue.length > 0) {
    const [current, kinship] = queue.shift();

    if (current === end) {
      return kinship;
    }

    for (const next of relations[current]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, kinship + 1]);
      }
    }
  }

  return -1;
}

const result = findKinship(start, end);
console.log(result);

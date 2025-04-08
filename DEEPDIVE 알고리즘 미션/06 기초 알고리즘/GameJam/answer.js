const solution = (lines) => {
  const N = parseInt(lines[0]);
  let [Rg, Cg] = lines[1].split(' ').map((x) => parseInt(x) - 1);
  let [Rp, Cp] = lines[2].split(' ').map((x) => parseInt(x) - 1);

  const arr = lines.slice(3, 3 + N).map((line) => line.split(' '));

  const count = Array.from({ length: N }, () => Array(N).fill(0));
  const command = Array.from({ length: N }, () => Array(N).fill(null));
  const direction = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const temp = arr[i][j];
      count[i][j] = parseInt(temp.slice(0, -1));
      const key = temp[temp.length - 1];
      command[i][j] = direction[key];
    }
  }

  const play = (sy, sx) => {
    let y = sy,
      x = sx;
    const visited = Array.from({ length: N }, () => Array(N).fill(0));
    visited[y][x] = 1;

    let notEnd = true;

    while (notEnd) {
      const cnt = count[y][x];
      const [dy, dx] = command[y][x];

      for (let i = 0; i < cnt; i++) {
        y = (y + dy + N) % N;
        x = (x + dx + N) % N;

        if (visited[y][x]) {
          notEnd = false;
          break;
        }
        visited[y][x] = 1;
      }
    }

    return visited.reduce(
      (acc, row) => acc + row.reduce((a, b) => a + b, 0),
      0
    );
  };

  const scoreG = play(Rg, Cg);
  const scoreP = play(Rp, Cp);

  console.log(scoreG > scoreP ? 'goorm ' + scoreG : 'player ' + scoreP);
};

const readline = require('readline');

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  const lines = [];

  for await (const line of rl) {
    lines.push(line.trim());
  }

  solution(lines);

  process.exit();
})();

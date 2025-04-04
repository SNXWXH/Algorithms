const solution = (x, y, N, water, Q, commands) => {
  const command = commands[0].split(' ');
  const dir = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  let dx = x;
  let dy = y;

  command.map((v) => {
    dx += dir[v][0];
    dy += dir[v][1];

    const exists = water.some((arr) => arr[0] === dx && arr[1] === dy);

    if (exists) {
      dx -= dir[v][0];
      dy -= dir[v][1];
    }
  });

  console.log(dx, dy);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    input.push(line.trim());

    if (input.length === 3 + parseInt(input[1])) rl.close();
  }
  const [x, y] = input[0].split(' ').map(Number);
  const N = parseInt(input[1]);

  const water = [];
  for (let i = 2; i < 2 + N; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    water.push([x, y]);
  }

  const Q = parseInt(input[2 + N]);
  const commands = input.slice(3 + N, 3 + N + Q);

  solution(x, y, N, water, Q, commands);
})();

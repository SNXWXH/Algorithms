function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1]

  const queue = [[0, 0, 1]];
  const visited = Array.from({ length: row }, () => Array(col).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    if (x === row - 1 && y === col - 1) return distance;

      for(let i = 0; i < 4; i++){
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx < row && ny >= 0 && ny < col &&
        maps[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
        }
    }
  }

  return -1;
}
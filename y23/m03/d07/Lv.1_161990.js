function solution(wallpaper) {
  let x = [];
  let y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      x.push(i);
      for (let j = 0; j < wallpaper[0].length; j++) {
        if (wallpaper[i][j] === "#") y.push(j);
      }
    }
  }
  return [x[0], Math.min(...y), x[x.length - 1] + 1, Math.max(...y) + 1];
}

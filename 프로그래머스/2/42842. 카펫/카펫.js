const solution = (brown, yellow) => {
 let ans = [];

  for (let y = 3; y <= (brown + yellow) / y; y++) {
    let x = Math.floor((brown + yellow) / y);
    if ((x - 2) * (y - 2) === yellow) {
      ans.push(x);
      ans.push(y);
      break;
    }
  }
  return ans;
}
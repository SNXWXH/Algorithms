function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((e) => {
      if (e <= budget) {
        budget -= e;
        return e;
      }
    }).length;
}

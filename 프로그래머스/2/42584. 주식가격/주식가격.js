const solution = (prices) => {
  const ans = [];

  prices.forEach((v, i) => {
    let count = 0;

    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[j] < v) break;
    }

    ans.push(count);
  });

  return ans;
}

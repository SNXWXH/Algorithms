const solution = (numbers) => {
  let ans = [];

  for (let i = 1; i < numbers.length - 1; i++) {
    let beforeNum = numbers[i - 1];
    let middleNum = numbers[i];
    let lastNum = numbers[i + 1];

    (beforeNum < middleNum && lastNum < middleNum) ||
    (beforeNum > middleNum && lastNum > middleNum)
      ? ans.push(1)
      : ans.push(0);
  }

  return ans;
};

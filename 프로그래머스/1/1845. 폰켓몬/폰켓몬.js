const solution = (nums) => {
  let numbers = [];

  nums.forEach((e) => {
    if (!numbers.includes(e)) numbers.push(e);
  });

  return nums.length / 2 > numbers.length ? numbers.length : nums.length / 2;
}

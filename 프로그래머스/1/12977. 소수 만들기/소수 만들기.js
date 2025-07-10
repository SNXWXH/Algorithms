const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let ans = 0;

  const dfs = (start, depth, sum) => {
    if (depth === 3) {
      if (isPrime(sum)) ans++;
      return;
    }

    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, depth + 1, sum + nums[i]);
    }
  }

  dfs(0, 0, 0);
  return ans;
}

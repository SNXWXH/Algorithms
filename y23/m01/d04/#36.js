function solution(balls, share) {
  let ball = 1n;
  let shares = 1n;
  let minus = 1n;
  for (let i = 1n; i <= balls; i++) ball *= i;
  for (let i = 1n; i <= share; i++) shares *= i;
  for (let i = 1n; i <= balls - share; i++) minus *= i;

  return ball / (minus * shares);
}

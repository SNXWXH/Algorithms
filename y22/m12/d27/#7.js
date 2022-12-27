function solution(denum1, num1, denum2, num2) {
  let min = (num1, num2) => (num1 % num2 === 0 ? num2 : min(num2, num1 % num2));
  var up = denum1 * num2 + denum2 * num1;
  var under = num1 * num2;
  var answer = [up / min(under, up), under / min(under, up)];
  return answer;
}

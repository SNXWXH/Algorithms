function solution(my_string) {
  my_string = my_string.replace(/[^0-9]/g, "").split("");
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) answer += Number(my_string[i]);
  return answer;
}

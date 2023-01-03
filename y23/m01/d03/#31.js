function solution(emergency) {
  let arr = [...emergency].sort((a, b) => b - a);
  return emergency.map((e) => arr.indexOf(e) + 1);
}

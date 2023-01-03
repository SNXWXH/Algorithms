function solution(age) {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  age = age.toString();
  let string = "";

  for (let i = 0; i < age.length; i++) string += arr[age[i]];

  return string;
}

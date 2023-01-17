function solution(my_string) {
  my_string = my_string.split("");
  // let arr = Array.from(new Set(my_string));
  let arr = [...new Set(my_string)];
  return arr.join("");
}

// function solution(my_string) {
//   return [...new Set(my_string)].join("");
// }

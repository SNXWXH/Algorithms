function solution(my_string) {
  let arr = my_string.split(" ");
  let sum = +arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") sum += +arr[i + 1];
    if (arr[i] === "-") sum -= +arr[i + 1];
  }
  return sum;
}

// function solution(my_string) {
//   return eval(my_string);
// }

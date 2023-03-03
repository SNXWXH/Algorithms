function solution(phone_number) {
  let result = "";
  let last = phone_number.slice(-4);
  for (let i = 1; i <= phone_number.length - 4; i++) result += "*";
  return result + last;
}

// function hide_numbers(s) {
// var result = "*".repeat(s.length - 4) + s.slice(-4);
// return result;
// }

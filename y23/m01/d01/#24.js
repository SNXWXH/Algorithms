function solution(my_string, n) {
  let string = "";
  for (let i = 0; i < [...my_string].length; i++)
    string += [...my_string][i].repeat(n);
  return string;
}

// function solution(my_string, n) {
//     return my_string.split("").map((v)=> v.repeat(n)).join('')
// }

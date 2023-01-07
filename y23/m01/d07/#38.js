function solution(num_list, n) {
  let array = [];
  for (let i = 0; i < num_list.length / n; i++)
    array = [...array, num_list.slice(i * n, i * n + n)];
  return array;
}

// function solution(num_list, n) {
//   var answer = [];

//   while (num_list.length) {
//     answer.push(num_list.splice(0, n));
//   }

//   return answer;
// }

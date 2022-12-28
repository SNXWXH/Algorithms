function solution(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  const length = array.length;
  var answer = array[parseInt(length / 2)];
  return answer;
}

// function solution(array) {
//   return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }

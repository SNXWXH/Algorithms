function solution(numbers) {
  var j = numbers.length;
  var arr = new Array();
  for (var i = 0; i < j; i++) {
    arr[i] = numbers[i] * 2;
  }
  var answer = arr;
  return answer;
}

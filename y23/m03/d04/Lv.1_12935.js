function solution(arr) {
  let remove = [...arr].sort((a, b) => b - a).pop();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === remove) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.length === 0 ? [-1] : arr;
}

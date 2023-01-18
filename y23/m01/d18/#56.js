function solution(my_string) {
  let arr = my_string.split("");
  let array = [];
  arr.map((e) =>
    e === e.toUpperCase()
      ? array.push(e.toLowerCase())
      : array.push(e.toUpperCase())
  );

  return array.join("");
}

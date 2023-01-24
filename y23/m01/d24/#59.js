function solution(s) {
  let arr = [];

  let array = s.split("");

  array.forEach((e) => {
    if (s.indexOf(e) === s.lastIndexOf(e)) {
      arr.push(e);
    }
  });

  return arr.sort().join("");
}

function solution(my_string) {
  let arr = my_string.split("").map((e) => e.toLowerCase());
  return arr.sort().join("");
}

const solution = (my_string) =>
  my_string
    .split("")
    .map((a) => a.toLowerCase())
    .sort()
    .join("");

function solution(dots) {
  let width =
    Math.max(...dots.map((e) => e[0])) - Math.min(...dots.map((e) => e[0]));
  let height =
    Math.max(...dots.map((e) => e[1])) - Math.min(...dots.map((e) => e[1]));
  return width * height;
}

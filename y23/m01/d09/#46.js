function solution(my_string) {
  my_string = my_string.replace(/[^0-9]/g, "").split("");
  let array = [];
  my_string.map((e) => array.push(Number(e)));
  return array.sort((a, b) => a - b);
}

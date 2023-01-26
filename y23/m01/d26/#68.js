function solution(quiz) {
  let arr = [];

  quiz.forEach((e) => {
    let calc = e.split(" ");
    let sum = 0;

    if (calc[1] === "+") sum = +calc[0] + +calc[2];
    else sum = +calc[0] - +calc[2];

    let result = Number(calc[4]);

    if (sum === result) arr.push("O");
    else arr.push("X");
  });

  return arr;
}

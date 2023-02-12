function solution(s, skip, index) {
  let answer = [];
  const alp = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const letter = s.split("");
  const pass = skip.split("").sort();
  let passalp = [...alp].filter((e) => !pass.includes(e));
  const check = (value) => {
    value + index < passalp.length
      ? answer.push(passalp[value + index])
      : check(value - passalp.length);
  };

  letter.map((e) => {
    check(passalp.indexOf(e));
  });

  return answer.join("");
}

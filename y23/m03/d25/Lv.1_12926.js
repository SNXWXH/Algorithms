function solution(s, n) {
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
  return s
    .split("")
    .map((e) => {
      if (e === " ") return e;
      if (e === e.toUpperCase()) {
        e = e.toLowerCase();
        if (alp.indexOf(e) + n >= 26)
          return alp[alp.indexOf(e) + n - 26].toUpperCase();
        else return alp[alp.indexOf(e) + n].toUpperCase();
      } else {
        if (alp.indexOf(e) + n >= 26) return alp[alp.indexOf(e) + n - 26];
        else return alp[alp.indexOf(e) + n];
      }
    })
    .join("");
}

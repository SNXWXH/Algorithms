function solution(s) {
  let pNum = 0;
  let yNum = 0;
  let arr = s.split("");
  for (let e of arr) {
    if (e === "p" || e === "P") pNum += 1;
    else if (e === "y" || e === "Y") yNum += 1;
  }
  return pNum === yNum ? true : false;
}

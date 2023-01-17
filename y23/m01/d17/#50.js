function solution(strlist) {
  let arr = [];
  for (let i = 0; i < strlist.length; i++) {
    arr.push(strlist[i].length);
  }
  return arr;
}

// function solution(strlist) {
//     return strlist.map((el) => el.length)
// }

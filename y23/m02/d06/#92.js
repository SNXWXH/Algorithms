function solution(id_pw, db) {
  let result = "fail";
  for (let a of db) {
    if (id_pw[0] === a[0] && id_pw[1] === a[1]) result = "login";
    if (id_pw[0] === a[0] && id_pw[1] !== a[1]) result = "wrong pw";
  }
  return result;
}

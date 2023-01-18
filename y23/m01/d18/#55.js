function solution(cipher, code) {
  let array = [];
  let arr = cipher.split("");
  for (let i = 1; i < (cipher.length + 1) / code; i++) {
    array.push(cipher[i * code - 1]);
  }

  return array.join("");
}

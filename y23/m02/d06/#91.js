function solution(babbling) {
  var ans = 0;
  let say = ["aya", "ye", "woo", "ma"];

  for (let i in babbling) {
    let init = babbling[i];

    for (let j in say) {
      if (babbling[i].includes(say[j])) {
        init = init.replace(say[j], "X"); // 할 수 있는 단어는 X로 치환
      }
    }

    init = init.replace(/X/gi, ""); // X를 모두 공백으로 치환하고 나서
    if (init.length === 0) {
      // 공백이 되면 ans에 추가
      ans += 1;
    }
  }
  return ans;
}

// function solution(babbling) {
//   var answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach((word) => {
//     if (regex.test(word)) answer++;
//   });

//   return answer;
// }

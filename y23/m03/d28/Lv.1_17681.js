function solution(n, arr1, arr2) {
  let arr1Map = [];
  let arr2Map = [];
  let map = Array.from(Array(arr1.length), () => Array(n).fill(" "));

  //arr1 2진수 변환 및 길이에 맞게 앞에 0 추가
  arr1.map((e) => {
    if (e.toString(2).length === n) arr1Map.push(e.toString(2).split(""));
    else
      arr1Map.push(
        ("0".repeat(n - e.toString(2).length) + e.toString(2)).split("")
      );
  });

  //arr1 2진수 변환 및 길이에 맞게 앞에 0 추가
  arr2.map((e) => {
    if (e.toString(2).length === n) arr2Map.push(e.toString(2).split(""));
    else
      arr2Map.push(
        ("0".repeat(n - e.toString(2).length) + e.toString(2)).split("")
      );
  });

  //두 개를 비교하면서 둘 중에 하나라고 1이라면 map에 #으로 바꾸기
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1Map[i][j] === "1" || arr2Map[i][j] === "1") map[i][j] = "#";
    }
  }

  return map.map((e) => e.join(""));
}

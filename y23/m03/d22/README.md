## #Lv.1 12930

[https://school.programmers.co.kr/learn/courses/30/lessons/12930](https://school.programmers.co.kr/learn/courses/30/lessons/12930)

```jsx
function solution(s) {
  let arr = s.split(" ");
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(
      arr[i]
        .split("")
        .map((e, i) => (!(i % 2) ? e.toUpperCase() : e.toLowerCase()))
        .join("")
    );
  }
  return answer.join(" ");
}
```

아까 푼 것에서 다시 코드를 더 줄일 수 있었다.

map에서 인덱스 값을 넘겨주어서 indexOf()를 쓰지 않고도 몇 번째인지 더 수월하게 구할 수 있었다.

그리고 push를 알파벳 하나씩이 아닌 전체로 넣어줘서 더 쉽게 짤 수 있었다.

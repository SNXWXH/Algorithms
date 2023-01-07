## #37

[코딩테스트 연습 - 점의 위치 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120841)

체크라는 변수를 써서 구조분해

```jsx
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
```

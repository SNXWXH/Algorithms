## #Lv.1 86051

[https://school.programmers.co.kr/learn/courses/30/lessons/86051](https://school.programmers.co.kr/learn/courses/30/lessons/86051)

```jsx
function solution(numbers) {
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return number
    .filter((e) => !numbers.includes(e))
    .reduce((acc, cur) => acc + cur, 0);
}
```

filter와 includes를 사용해서 전체 배열에서 존재하지 않는 수를 골라내고 reduce를 사용해서 숫자들 더해주기

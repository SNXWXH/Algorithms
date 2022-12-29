## #9

[코딩테스트 연습 - 나머지 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120810)

## #10

[코딩테스트 연습 - 중앙값 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120811)

- 배열 숫자 정렬
  ```jsx
  //오름차순
  data.sort(function (a, b) {
    return a - b;
  }); // 결과 값 [1, 2, 3, 4, 11, 12]

  //내림차순
  data.sort(function (a, b) {
    // 내림차순

    return b - a;
  }); // 결과 값  [12, 11, 4, 3, 2, 1]
  ```

```jsx
//화살표 함수 사용, parseInt 대신 Math.floor 사용으로 소수점 버리기
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
```

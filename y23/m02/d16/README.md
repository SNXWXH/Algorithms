## #Lv.1 12937

[](https://school.programmers.co.kr/learn/courses/30/lessons/12937)

## #Lv.1 12944

[](https://school.programmers.co.kr/learn/courses/30/lessons/12944)

## #Lv.1 12928

[](https://school.programmers.co.kr/learn/courses/30/lessons/12928)

### 1차 시도

```jsx
function solution(n) {
  let arr = [];
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    if (n % i === 0) {
      arr.push(n / i);
      arr.push(i);
    }
  }
  let set = new Set(arr);
  return [...set].reduce((a, b) => a + b);
}
```

테스트 16 > 런타임 에러

### 2차 시도

```jsx
function solution(n) {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(n / i);
      arr.push(i);
    }
  }
  let set = new Set(arr);
  return [...set].reduce((a, b) => a + b, 0);
}
```

reduce 함수를 사용할 때, 뒤에 처음에 시작되는 initial Value을 설정해주었다,

initial Value는 `callback`의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다.

아마도 테스트 16는 n이 0일 경우가 아니였나 싶다.

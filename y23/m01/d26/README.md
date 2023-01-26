## #65

[코딩테스트 연습 - 숫자 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/120904)

### #66

[코딩테스트 연습 - n의 배수 고르기](https://school.programmers.co.kr/learn/courses/30/lessons/120905)

잘 풀었다 생각했는데 이럴 때 필터를 쓰는거였다,,,

```jsx
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
```

### #67

[코딩테스트 연습 - 자릿수 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120906)

<aside>
⚠️ reduce() → 배열의 모든 요소들에 ㄷ해서 연산을 수행하여 하나의 결과 값을 리턴

</aside>

```jsx
const arr = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

// 0 + 1 + 2 + 3 + 4
console.log(sumWithInitial);
```

---

```jsx
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
```

### #67

[코딩테스트 연습 - OX퀴즈](https://school.programmers.co.kr/learn/courses/30/lessons/120907)

숫자를 더하는 과정에서 문자열로 인식해서 문자열처럼 더해줘서 숫자로 변환해줌

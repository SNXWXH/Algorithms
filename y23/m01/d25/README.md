## #61

[코딩테스트 연습 - 편지](https://school.programmers.co.kr/learn/courses/30/lessons/120898)

### #62

[코딩테스트 연습 - 가장 큰 수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/120899)

### #63

[코딩테스트 연습 - 문자열 계산하기](https://school.programmers.co.kr/learn/courses/30/lessons/120902)

<aside>
⚠️ eval() → 문자열을 계산해줌
하지만 보안상 문제가 있어 사용하지 말 것

</aside>

```jsx
console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false
```

### #64

[코딩테스트 연습 - 배열의 유사도](https://school.programmers.co.kr/learn/courses/30/lessons/120903)

```jsx
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
```

<aside>
⚠️ 필터 사용하기!!!!!!!!!!!!!!!!!!!

</aside>

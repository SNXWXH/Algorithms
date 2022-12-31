## #17

[코딩테스트 연습 - 옷가게 할인 받기](https://school.programmers.co.kr/learn/courses/30/lessons/120818)

## #18

[코딩테스트 연습 - 아이스 아메리카노](https://school.programmers.co.kr/learn/courses/30/lessons/120819#)

## #19

[코딩테스트 연습 - 나이 출력](https://school.programmers.co.kr/learn/courses/30/lessons/120820)

2022년 기준으로 하라고 하여 2022를 박아버렸는데 출제자의 의도는 `new Date().getFullYear()`를 활용하라는 것 같았다.

```jsx
const solution = (age) => new Date().getFullYear() - age + 1;
```

## #20

[코딩테스트 연습 - 배열 뒤집기](https://school.programmers.co.kr/learn/courses/30/lessons/120821)

<aside>
⚠️ 배열 거꾸로 → reverse() 함수 사용
원본 배열은 유지하기 → […arr].reverse()

’…’ → 전개 연산자로 배열이나 객체에서 요소들을 꺼내서 복사해줌

</aside>

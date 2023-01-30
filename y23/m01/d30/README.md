## #69

[코딩테스트 연습 - 문자열안에 문자열](https://school.programmers.co.kr/learn/courses/30/lessons/120908)

<aside>
⚠️ includes() → 특정 요소를 포함하고 있는지 판별

</aside>

```jsx
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
```

### #70

[코딩테스트 연습 - 제곱수 판별하기](https://school.programmers.co.kr/learn/courses/30/lessons/120909)

<aside>
⚠️ Math.sqrt() → 숫자의 제곱근 반환

</aside>

n의 제곱근을 반환해서 그 수가 정수인지 아닌지 판별하기 위해 1로 나누기

---

<aside>
⚠️ isInteger() → 정수인지 아닌지 판별

</aside>

```jsx
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
```

### #71

[코딩테스트 연습 - 세균 증식](https://school.programmers.co.kr/learn/courses/30/lessons/120910)

### #72

[코딩테스트 연습 - 문자열 정렬하기 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120911)

```jsx
const solution = (my_string) =>
  my_string
    .split("")
    .map((a) => a.toLowerCase())
    .sort()
    .join("");
```

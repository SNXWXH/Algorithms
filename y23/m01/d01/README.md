## #21

[코딩테스트 연습 - 문자열 뒤집기](https://school.programmers.co.kr/learn/courses/30/lessons/120822)

## #22

[코딩테스트 연습 - 직각삼각형 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript)

<aside>
⚠️ repeat(n) → 문자열을 n번 반복 연결한 문자열 반환

</aside>

```jsx
"a".repeat(3); // "aaa" 반환

"abc".repeat(3); // "abcabcabc" 반환

"a".repeat(); // "" 빈문자열 반환

"a".repeat(0); // "" 빈문자열 반환
```

## #23

[](https://school.programmers.co.kr/learn/courses/30/lessons/120824)

```jsx
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
```

<aside>
⚠️ for … of → 객체를 반복하여 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프 생성

</aside>

```jsx
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## #24

[코딩테스트 연습 - 문자 반복 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/120825)

<aside>
⚠️ map() → 배열을 순회하면서 요소를 콜백의 인자로 전달

</aside>

```jsx
const arr1 = [1, 4, 9, 16];

const arr2 = arr1.map((x) => x * 2);

console.log(arr2);

//[ 2, 8, 18, 32 ]
```

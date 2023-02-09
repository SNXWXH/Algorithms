## #94

[코딩테스트 연습 - 이진수 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120885)

<aside>
⚠️ parseInt() → 문자열을 파싱하여 특정 진수의 정수를 반환

주로 정수를 반환하는 함수로 사용

</aside>

```jsx
const str = "10";
console.log(parseInt(str)); //10 (str을 정수로)
console.log(parseInt(str, 2)); //2 (2진수인 str을 10진수로)

//문자열이 진법 체계에 맞지 않는 경우
//parseInt("23", 2)에서, 문자열 "23"은 이진수가 아니므로 NaN을 반환
```

<aside>
⚠️ tostring() → 숫자의 경우 선택적으로 기수(2~36)를 매개변수로 취하며, 이를 통해 10진수를 특정 진수로 변환한 값 반환

주로 문자열을 반환하는 함수로 사용

</aside>

```jsx
const num = 10;
console.log(num.toString()); //"10" (num을 문자열로)
console.log(num.toString(2)); //"1010" (num을 2진수로)
```

### #95

[코딩테스트 연습 - A로 B 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120886)

<aside>
⚠️ 배열 비교하는 법
뒤에 toString() 붙이거나 JSON.stringify()로 문자열 변경해주기

</aside>

### #96

[코딩테스트 연습 - k의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120887)

```jsx
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
```

-1을 하는 이유는 k가 9라고 가정하면 '191'인 경우 9로 분리하면 '1', '1'이고 '19191'이면 '1', '1', '1' 이렇게 9의 개수보다 항상 1이 많아지므로

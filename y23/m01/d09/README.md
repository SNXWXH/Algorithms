## #45

[코딩테스트 연습 - 모음 제거](https://school.programmers.co.kr/learn/courses/30/lessons/120849#)

<aside>
⚠️ replace() → 특정 문자열 제거

</aside>

```jsx
//특정 문자열 하나만 제거
let myStr = "Hello! World!";
myStr = myStr.replace("o", "");
console.log(myStr); //Hell! World!

//특정 문자열 모두 제거
let myStr = "Hello! World!";
myStr = myStr.replace(/o/g, "");
console.log(myStr); //Hell! Wrld!
```

- 배열 안에 모음들을 넣어두고 배열만 넣으면 됐음

```jsx
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
```

### #46

[코딩테스트 연습 - 문자열 정렬하기 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120850)

replace 함수를 통해서 숫자가 아닌 문자열들(`[^0-9]`)을 공백으로 바꾸고 map 함수와 sort를 사용하여 풀었다.

### #47

[코딩테스트 연습 - 숨어있는 숫자의 덧셈 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120851)

이 전 알고리즘에서 풀었던 정규식을 사용하고 배열에 있는 문자열을 숫자로 변환하여 더해주었다.

### #48

[코딩테스트 연습 - 소인수분해](https://school.programmers.co.kr/learn/courses/30/lessons/120852)

<aside>
⚠️ Math.sqrt() → 숫자의 제곱근 반환

</aside>

제곱근 반환 함수를 사용하여 소수를 판별하는 코드로 소수들을 넣기

```jsx
//소수 판별
function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}
```

<aside>
⚠️ Array.from() → set으로 되어있는 함수를 배열로 변환

</aside>

## #33

[코딩테스트 연습 - 개미 군단](https://school.programmers.co.kr/learn/courses/30/lessons/120837)

```bash
function solution(hp) {
    const 장군개미 = Math.floor(hp / 5);
    const 병정개미 = Math.floor((hp - (장군개미 * 5)) / 3);
    const 일개미 = hp - ((장군개미 * 5) + (병정개미 * 3));
    return 장군개미+병정개미+일개미;
}
```

if문을 쓰지 않고 그냥 값들만 더해줬어도 됨

## #34

[코딩테스트 연습 - 모스부호 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120838)

<aside>
⚠️ 객체 → {변수명:키값}
선언에 대한 명시(var, let, const)가 없을 경후 괄호를 사용해서 묶어줘야 함

</aside>

```jsx
var { a1, a2, ...rest_a } = { a1 : 10, a2 : 20, a3 : 30, a4 : 40 };
console.log(a1); // 10
console.log(a2); // 20
console.log(rest_a); // { a3: 30, a4: 40 }

----
//객체 비구조화

({ a, b } = { a : 10, b : 20});
console.log(a); // 10
console.log(b); // 20
{ c, d } = { c : 30, d : 40}; // error
```

## #35

[코딩테스트 연습 - 가위 바위 보](https://school.programmers.co.kr/learn/courses/30/lessons/120839)

이전 문제에서 풀었던 방법처럼 객체로 푸니 코드가 줄었다.

```jsx
//split 대신 [...]을 통해서도 풀 수 있음

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
```

## #36

[코딩테스트 연습 - 구슬을 나누는 경우의 수](https://school.programmers.co.kr/learn/courses/30/lessons/120840)

팩토리얼을 사용해서 일정 수가 넘어가면 Int의 범위를 넘게 되어 BigInt를 사용해야한다.

<aside>
⚠️ BigInt → int의 범위보다 넓은 데이터 타입
정수 리터럴 끝에 n을 붙이거나 BigInt를 호출하면 BigInt 타입의 값으로 변환

</aside>

```jsx
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // 10n과 동일합니다.
```

## #5

[코딩테스트 연습 - 두 수의 나눗셈](https://school.programmers.co.kr/learn/courses/30/lessons/120806)

<aside>
⚠️ parseInt()는 정수 변환
Math.floor()는 소수점 버리기

</aside>

```jsx
const solution = (num1, num2) => Math.floor((num1 / num2) * 1000);
```

## #6

[코딩테스트 연습 - 숫자 비교하기](https://school.programmers.co.kr/learn/courses/30/lessons/120807)

<aside>
⚠️ if문이 아닌 삼항연산자를 통해서 코드 작성하기

</aside>

```jsx
function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}
```

## #7

[코딩테스트 연습 - 분수의 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/120808)

<aside>
⚠️ 재귀함수: 함수가 자기 자신을 다시 호출하는 함수(종료조건이 있어야함. 아니면 무한반복)

</aside>

너무 어렵게 생각했던 것 같다. 최소공배수를 구하려고 코드 짜는 것이 쉽지 않았다. 분모와 분자를 곱해주고 분모와 분자의 최소공배수로 나눠주었다.

## #8

[코딩테스트 연습 - 배열 두 배 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120809)

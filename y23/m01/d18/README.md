## #53

[코딩테스트 연습 - 가까운 수](https://school.programmers.co.kr/learn/courses/30/lessons/120890)

<aside>
📍 Math.abs() → 음수를 양수로 변환

</aside>

```jsx
var test = -123;
test = Math.abs(test);

//123
```

- sort 정렬할 때 arr.sort를 하게 되면 원래 있던 배열도 바뀌니 […arr]로 사용하기
- 가장 가까운 숫자가 여러 개일 경우 더 작은 수를 return 해야함으로 원래 있던 배열을 오름차순으로 정렬해서 사용

### #54

[코딩테스트 연습 - 369게임](https://school.programmers.co.kr/learn/courses/30/lessons/120891#)

```jsx
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
```

---

숫자로 되어있어서 문자열로 바꿔준 후에 split으로 나눠 배열에 넣어준 후 map으로 문자열을 다시 숫자로 바꾸어주었다.

map과 삼항연산자로 풀려고 했는데 안풀어졌다.

```jsx
//안풀어진 코드
function solution(order) {
  let sum = 0;
  let arr = String(order)
    .split("")
    .map((e) => Number(e));
  sum += arr.map((e) => (e === 3 || e === 6 || e === 9 ? 1 : 0));
  console.log(sum);
  return sum;
}
```

### #55

[코딩테스트 연습 - 암호 해독](https://school.programmers.co.kr/learn/courses/30/lessons/120892#)

### #56

[코딩테스트 연습 - 대문자와 소문자](https://school.programmers.co.kr/learn/courses/30/lessons/120893)

<aside>
📍 toUpperCase() → 대문자 변환
toLowerCase() → 소문자변환

</aside>

```jsx
const str = "Hello, World, JavaScript";

const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

//HELLO, WORLD, JAVASCRIPT
```

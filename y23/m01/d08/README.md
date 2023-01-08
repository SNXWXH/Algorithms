## #41

[코딩테스트 연습 - 주사위의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120845)

### #42

[코딩테스트 연습 - 최댓값 만들기(1)](https://school.programmers.co.kr/learn/courses/30/lessons/120847)

### #43

[코딩테스트 연습 - 팩토리얼](https://school.programmers.co.kr/learn/courses/30/lessons/120848)

제한사항이 0 < `n` ≤ 3,628,800이므로 최대 나올 수 있는 값은 10!이므로 10이다. 그래서 max를 10으로 잡고 1부터 10까지 for문으로 돌려줬다.

### #44

[코딩테스트 연습 - 합성수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/120846)

<aside>
⚠️ .size → set 객체가 가진 원소의 개수 나타내기(메모리의 크기가 아닌 요소의 수를 반환)

</aside>

```jsx
const set1 = new Set();
const object1 = {};

set1.add(42);
set1.add("forty two");
set1.add("forty two");
set1.add(object1);

console.log(set1.size);
// expected output: 3
```

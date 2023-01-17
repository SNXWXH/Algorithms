## #49

[코딩테스트 연습 - 컨트롤 제트](https://school.programmers.co.kr/learn/courses/30/lessons/120853)

### #50

[코딩테스트 연습 - 배열 원소의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120854)

<aside>
⚠️ 배열을 돌리면서 특정 행위를 할 때 map 사용하기

</aside>

```jsx
function solution(strlist) {
  return strlist.map((el) => el.length);
}
```

### #51

[코딩테스트 연습 - 삼각형의 완성조건 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120889)

경우의 수가 두가지일 떄는 삼항연산자 사용하기

```jsx
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
```

### #52

[코딩테스트 연습 - 중복된 문자 제거](https://school.programmers.co.kr/learn/courses/30/lessons/120888)

```jsx
//객체를 배열로 자동 변환
let arr = [...new Set(my_string)];
//같은거임
let arr = Array.from(new Set(my_string));
```

---

split으로 굳이 나눌 필요 없이 바로 인자로 넘겨도 됨

```jsx
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
```

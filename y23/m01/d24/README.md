## #58

[코딩테스트 연습 - 인덱스 바꾸기](https://school.programmers.co.kr/learn/courses/30/lessons/120895)

<aside>
⚠️ splice() → 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경

</aside>

**splice(start[, deleteCount[, item1[, item2[, ...]]]])**

start: 배열의 변경을 시작할 인덱스.

- 음수를 지정한 경우: 배열의 끝에서부터 요소를 센다.
- 배열의 길이보다 큰 수를 지정한 경우: 실제 시작 인덱스는 배열의 길이로 설정
- 절대값이 배열의 길이보다 큰 경우: 0으로 세팅

deleteCount: 배열에서 제거할 요소의 수.

- 생략 / 값이 array.length - start보다 큰 경우: start부터의 모든 요소를 제거.
- 0 이하의 수를 지정: 어떤 요소도 제거되지 않는다.

item1, item2, ... : 배열에 추가할 요소.

- 지정하지 않는 경우: splice()는 요소 제거만 수행한다.

반환값: 제거한 요소를 담은 배열.

- 아무 값도 제거하지 않았으면 빈 배열을 반환한다.

```jsx
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var arr1 = arr.splice(10, 2, "a", "b", "c");

console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr1); // [11, 12]
```

---

```jsx
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
```

### #59

[코딩테스트 연습 - 한 번만 등장한 문자](https://school.programmers.co.kr/learn/courses/30/lessons/120896)

<aside>
⚠️ indexOf() → 앞에서부터 검색해서 값 찾기
lastIndexOf() → 뒤에서부터 검색해서 값 찾기

</aside>

앞에서부터 검색한 값과 뒤에서부터 검색한 값이 같으면 배열 안에 넣어주는 식

### #60

[코딩테스트 연습 - 약수 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120897)

```jsx
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) answer.push(i);
  }

  return answer;
}
```

그냥 i만 집어넣으면 중복제거 안해줘도 됨

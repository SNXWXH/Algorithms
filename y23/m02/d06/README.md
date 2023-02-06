## #89

[코딩테스트 연습 - 특이한 정렬](https://school.programmers.co.kr/learn/courses/30/lessons/120880)

절대값과 indexOf를 같이 써서 풀어보려고 했는데 절대값을 사용해서 정렬하게 되면 indexOf를 쓰지 못해 고민하닥 다른 분의 해설을 보게 되었는데 정렬 안에서 절대값을 사용하여 풀면 되는거였다.

```jsx
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];
    // 거리가 같다면 더 큰 수를 우선 배치
    if (aGab === bGab) return b - a;
    // 다르다면 거리별 오름차순 정렬
    return aGab - bGab;
  });
}
```

### #90

[코딩테스트 연습 - 등수 매기기](https://school.programmers.co.kr/learn/courses/30/lessons/120882)

### #91

[코딩테스트 연습 - 옹알이 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120956)

<aside>
⚠️ test() → 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 참 거짓으로 반환

</aside>

```jsx
const str = "table football";

const regex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(regex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 0

console.log(globalRegex.test(str));
// Expected output: true
```

---

정규식을 통해서 비교하고 test()를 통해서 문자열이 일치하는지 확인

```jsx
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
```

### #92

[코딩테스트 연습 - 로그인 성공?](https://school.programmers.co.kr/learn/courses/30/lessons/120883)

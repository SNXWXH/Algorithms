## #Lv.1 12922

[https://school.programmers.co.kr/learn/courses/30/lessons/12922](https://school.programmers.co.kr/learn/courses/30/lessons/12922)

## Lv.1 70128

[https://school.programmers.co.kr/learn/courses/30/lessons/70128](https://school.programmers.co.kr/learn/courses/30/lessons/70128)

```jsx
const solution = (a, b) => a.reduce((acc, cur, i) => (acc += a[i] * b[i]), 0);

// function solution(a, b) {
//   let answer = 0;
//   for (let i = 0; i < a.length; i++) answer += a[i] * b[i];
//   return answer;
// }
```

처음엔 반복문으로 풀었다가 reduce로 다시 품

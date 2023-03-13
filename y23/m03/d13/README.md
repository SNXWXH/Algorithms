## #Lv.1 160586

[https://school.programmers.co.kr/learn/courses/30/lessons/160586](https://school.programmers.co.kr/learn/courses/30/lessons/160586)

<aside>
💡 Infinity → 무한대를 나타내는 숫자 값

</aside>

```jsx
const maxNumber = Math.pow(10, 1000); // Max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // Expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// Expected output: 0
```

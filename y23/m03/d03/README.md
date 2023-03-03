## #Lv.1 12948

[https://school.programmers.co.kr/learn/courses/30/lessons/12948](https://school.programmers.co.kr/learn/courses/30/lessons/12948)

```jsx
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}
```

repeat을 활용하여 \*을 반복함

<aside>
💡 repeat() → 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환

</aside>

```jsx
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError
```

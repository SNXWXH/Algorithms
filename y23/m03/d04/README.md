## #Lv.1 76501

[https://school.programmers.co.kr/learn/courses/30/lessons/76501](https://school.programmers.co.kr/learn/courses/30/lessons/76501)

## #Lv.1 12935

[https://school.programmers.co.kr/learn/courses/30/lessons/12935](https://school.programmers.co.kr/learn/courses/30/lessons/12935)

<aside>
💡 splice() → 배열의 기존 요소를 삭제 또는 교체하거나 새로운 요소를 추가하여 배열의 내용 변경

</aside>

```jsx
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

---

let arr = ['a', 'b', 'b', 'c'];

// 원소 'b' 삭제
for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 'b')  {
    arr.splice(i, 1);
    i--;
  }
}

document.writeln(arr); // ['a', 'c']
```

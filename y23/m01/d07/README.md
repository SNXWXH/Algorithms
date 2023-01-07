## #38

[코딩테스트 연습 - 2차원으로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120842)

push를 사용해서 배열 넣기

```jsx
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
```

### #39

[코딩테스트 연습 - 공 던지기](https://school.programmers.co.kr/learn/courses/30/lessons/120843)

1. 첫 번째 사람이 공을 가지고 있고 k-1만큼 돌면서 공 던지기
2. 공 던질 때 한 사람씩 건너뛰도록 2 더하기
3. 마지막 번호를 넘어가면 다시 돌아오도록 빼주기

---

```jsx
const solution = (numbers, k) => numbers[((k * 2 - 1) % numbers.length) - 1];
```

### #40

[코딩테스트 연습 - 배열 회전시키기](https://school.programmers.co.kr/learn/courses/30/lessons/120844)

<aside>
⚠️ pop() → 배열에서 마지막 요소를 제거하여 그 값을 호출자에게 반환

</aside>

```jsx
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // "tomato"
console.log(plants); // Array ["broccoli", "cauliflower", "cabbage", "kale"]
```

<aside>
⚠️ shift() → 배열에서 첫 번째 요소 제거 후 제거된 요소 반환

</aside>

```jsx
const array1 = [1, 2, 3];
const firstElement = array1.shift();

console.log(array1); // Array [2, 3]
console.log(firstElement); // 1
```

<aside>
⚠️ unshift() → 주어진 값인 새로운 요소를 배열 형태의 객체 시작점에 삽입 후, 새로운 길이를 반환

</aside>

```jsx
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5)); // 5
console.log(array1); //  Array [4, 5, 1, 2, 3]
```

---

<aside>
⚠️ push() → 배열의 끝에 하나 이상의 요소 추가 후, 배열의 새로운 길이 반환
배열은 닮은 객체에 call() 또는 apply()로 사용 될 수 있음

</aside>

```jsx
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');

console.log(count); // 4. 두 개를 추가하면 5
console.log(animals); // Array ["pigs", "goats", "sheep", "cows"]

---------

//여러 배열 합치기
var vegetables = ['설탕당근', '감자'];
var moreVegs = ['셀러리', '홍당무'];

Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); // ['설탕당근', '감자', '셀러리', '홍당무']
```

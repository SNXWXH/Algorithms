## #Lv.1 159994

[](https://school.programmers.co.kr/learn/courses/30/lessons/159994)

### 1차 시도

```jsx
function solution(cards1, cards2, goal) {
  goal.forEahc((e) => {
    if (cards1[0] === e) cards1.shift();
    else if (cards2[0] === e) cards2.shift();
    else return "No";
  });
  return "Yes";
}
```

콘솔을 찍어보니 No가 찍혀야하는 부분에서 return이 안되고 계속 진행되었다.

찾아보니 forEach에서는 return/breack가 안된다고 한다.

### 2차 시도

```jsx
function solution(cards1, cards2, goal) {
  for (let e of goal) {
    if (cards1[0] === e) cards1.shift();
    else if (cards2[0] === e) cards2.shift();
    else return "No";
  }
  return "Yes";
}
```

forEach부분을 for…of로 바꿔주었다.

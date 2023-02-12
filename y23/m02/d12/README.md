## #Lv.1 155652

[](https://school.programmers.co.kr/learn/courses/30/lessons/155652)

### 1차시도

```jsx
function solution(s, skip, index) {
  let answer = [];
  const alp = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const letter = s.split("");
  const pass = skip.split("").sort();
  let passalp = [...alp].filter((e) => !pass.includes(e));

  letter.map((e) => {
    if (passalp.indexOf(e) + index < passalp.length)
      answer.push(passalp[passalp.indexOf(e) + index]);
    else {
      answer.push(passalp[passalp.indexOf(e) + index - passalp.length]);
    }
  });
  return answer.join("");
}
```

index의 값만큼 더했을 떄, 넘어갈 경우를 예외처리 해주었지만, 제한사항으로 봤을 떄의 최대값으로 넣고 예외처리 하는 것을 생각하지 못 했다.

### 반례

| s       | skip         | index | result  |
| ------- | ------------ | ----- | ------- |
| "zzzzz” | "bcdefghijk” | 20    | "nnnnn” |

### 2차시도

```jsx
function solution(s, skip, index) {
  let answer = [];
  const alp = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const letter = s.split("");
  const pass = skip.split("").sort();
  let passalp = [...alp].filter((e) => !pass.includes(e));
  const check = (value) => {
    value + index < passalp.length
      ? answer.push(passalp[value + index])
      : check(value - passalp.length);
  };
  letter.map((e) => {
    check(passalp.indexOf(e));
  });
  return answer.join("");
}
```

재귀함수를 사용하여 반례에 충족하는 코드를 만들었다.

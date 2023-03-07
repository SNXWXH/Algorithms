## #Lv.1 161990

[https://school.programmers.co.kr/learn/courses/30/lessons/161990](https://school.programmers.co.kr/learn/courses/30/lessons/161990)

### 1차 시도

```jsx
function solution(wallpaper) {
  let result = [];
  wallpaper = wallpaper.map((e) => e.split(""));
  //lux 값
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      result.push(i);
      break;
    }
  }
  //luy 값
  for (let i = 0; i < wallpaper[1].length; i++) {
    for (let j = 0; j < wallpaper.length; j++) {
      if (wallpaper[j][i] === "#") {
        result.push(i);
        break;
      }
    }
    if (result.length === 2) break;
  }
  //rdx 값
  for (let j = wallpaper.length - 1; j >= 0; j--) {
    if (wallpaper[j].includes("#")) {
      result.push(j + 1);
      break;
    }
  }
  //rdy 값
  for (let i = wallpaper[1].length - 1; i >= 0; i--) {
    for (let j = wallpaper.length - 1; j >= 0; j--) {
      if (wallpaper[j][i] === "#") {
        result.push(i + 1);
        break;
      }
    }
    if (result.length === 4) break;
  }
  return result;
}
```

| 테스트 21 〉 | 실패 (런타임 에러) |
| ------------ | ------------------ |
| 테스트 22 〉 | 실패 (런타임 에러) |

### 2차 시도

```jsx
function solution(wallpaper) {
  let result = [];
  let x = [];
  let y = [];
  wallpaper = wallpaper.map((e) => e.split(""));

  //luy, rdy 값
  for (let i = 0; i < wallpaper[1].length; i++) {
    for (let j = 0; j < wallpaper.length; j++) {
      if (wallpaper[j][i] === "#") {
        y.push(i);
      }
      if (wallpaper[j].includes("#")) {
        x.push(j);
      }
    }
  }
  return [x[0], y[0], x[x.length - 1] + 1, y[y.length - 1] + 1];
}
```

for문이 너무 많은 탓이였나 해서 for문을 줄여봐도 계속 21, 22만 런타임 에러가 났다.

### 3차 시도

```jsx
function solution(wallpaper) {
  let x = [];
  let y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      x.push(i);
      for (let j = 0; j < wallpaper[0].length; j++) {
        if (wallpaper[i][j] === "#") y.push(j);
      }
    }
  }
  return [x[0], Math.min(...y), x[x.length - 1] + 1, Math.max(...y) + 1];
}
```

sort()를 없애고 Math.max와 Math.min을 사용하였는데도 안됐다.

결국 문제는 for문을 돌려줄 때 사용했던 wallpaper[1]이 문제였다.

[1]을 [0]으로 바꾸니 바로 해결되었다.

처음에 푼 코드와 두번째 푼 코드도 wallpaper[0]으로 바꾸니 바로 성공했다.

앞으로 for문 돌릴 때 배열은 [0]으로 해야겠다.

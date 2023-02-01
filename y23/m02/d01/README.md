## #77

[코딩테스트 연습 - 직사각형 넓이 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120860)

```jsx
function solution(dots) {
  return Math.abs(dots[0][0] - dots[1][0]) * Math.abs(dots[0][1] - dots[3][1]);
}
```

풀었는데 좌표가 순서대로 안나올 수도 있다는 예외 상황 존재

---

Math.max와 Math.min를 통해서 x의 가장 큰 값과 작은 값을 찾아서 차를 구하고 y좌표도 똑같이 구하기

### #78

[코딩테스트 연습 - 캐릭터의 좌표](https://school.programmers.co.kr/learn/courses/30/lessons/120861)

방향키 계산은 잘 했었는데 보드의 크기를 벗어난 것을 체크해주지 못해서 계속 안풀렸다.

그래서 key값과 보드의 크기를 같은 if문 안에 넣어줬으나 key값을 먼저 체크 하고 값을 올린 다음에 보드값을 확인하는 if문을 넣어줬다

---

```jsx
function solution(keyinput, board) {
  var answer = [0, 0];

  const bndrX = (board[0] - 1) / 2;
  const bndrY = (board[1] - 1) / 2;

  keyinput.forEach((cmd) => {
    switch (cmd) {
      case "up": {
        if (answer[1] !== bndrY) answer[1]++;
        break;
      }
      case "down": {
        if (answer[1] !== -bndrY) answer[1]--;
        break;
      }
      case "left": {
        if (answer[0] !== -bndrX) answer[0]--;
        break;
      }
      case "right": {
        if (answer[0] !== bndrX) answer[0]++;
        break;
      }
    }
  });

  return answer;
}
```

## #83

[코딩테스트 연습 - 외계어 사전](https://school.programmers.co.kr/learn/courses/30/lessons/120869)

### #84

[코딩테스트 연습 - 안전지대](https://school.programmers.co.kr/learn/courses/30/lessons/120866)

못 풀겠어서 다른 사람의 풀이를 참고했다

```jsx
function solution(board) {
  let result = 0;
  // 전체 순회
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // board[i][j]의 값이 1인경우 상하좌우 및 대각선 검사를 실행
      if (board[i][j] === 1) {
        // 상하 좌우를 2로 변경하되 이는 해당 칸이 0인 경우에만 해당 즉 폭탄은 건들지 않는다.
        // 맨 윗줄이 아닌 경우
        if (i !== 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
        }
        // 맨 아랫줄이 아닌 경우
        if (i !== board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
        }
        // 맨 왼쪽이 아닌 경우
        if (j !== 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
        // 맨 오른쪽이 아닌 경우
        if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        // 맨 대각선 윗 왼쪽이 아닌 경우
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = 2;
        }
        // 맨 대각선 윗 오른쪽이 아닌 경우
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = 2;
        }
        // 맨 대각선 아랫 왼쪽이 아닌 경우
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = 2;
        }
        // 맨 대각선 아랫 오른쪽이 아닌 경우
        if (
          i !== board.length - 1 &&
          j !== board[i].length - 1 &&
          board[i + 1][j + 1] !== 1
        ) {
          board[i + 1][j + 1] = 2;
        }
      }
    }
  }
  board.forEach((a) => a.forEach((b) => (b === 0 ? result++ : null)));
  return result;
}
```

### #85

[코딩테스트 연습 - 저주의 숫자 3](https://school.programmers.co.kr/learn/courses/30/lessons/120871)

### #86

[코딩테스트 연습 - 평행](https://school.programmers.co.kr/learn/courses/30/lessons/120875)

### #87

[코딩테스트 연습 - 겹치는 선분의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120876)

전혀 감을 잡지 못해서 다른 사람의 풀이를 참고했다

```jsx
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
```

```jsx
function solution(lines) {
  var answer = 0;
  let lineMap = new Array(200); // 선분들이 놓일 공간
  lineMap.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }
  return answer;
}
```

### #88

[코딩테스트 연습 - 유한소수 판별하기](https://school.programmers.co.kr/learn/courses/30/lessons/120878)

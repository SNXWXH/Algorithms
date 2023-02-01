function solution(keyinput, board) {
  let move = [0, 0];
  keyinput.forEach((e) => {
    if (e === "up") {
      move[1] += 1;
      if (Math.abs(move[1]) > Math.floor(board[1] / 2)) move[1] -= 1;
    }
    if (e === "down") {
      move[1] -= 1;
      if (Math.abs(move[1]) > Math.floor(board[1] / 2)) move[1] += 1;
    }
    if (e === "left") {
      move[0] -= 1;
      if (Math.abs(move[0]) > Math.floor(board[0] / 2)) move[0] += 1;
    }
    if (e === "right") {
      move[0] += 1;
      if (Math.abs(move[0]) > Math.floor(board[0] / 2)) move[0] -= 1;
    }
  });
  return move;
}

// function solution(keyinput, board) {
//   var answer = [0, 0];

//   const bndrX = (board[0] - 1) / 2;
//   const bndrY = (board[1] - 1) / 2;

//   keyinput.forEach((cmd) => {
//     switch (cmd) {
//       case "up": {
//         if (answer[1] !== bndrY) answer[1]++;
//         break;
//       }
//       case "down": {
//         if (answer[1] !== -bndrY) answer[1]--;
//         break;
//       }
//       case "left": {
//         if (answer[0] !== -bndrX) answer[0]--;
//         break;
//       }
//       case "right": {
//         if (answer[0] !== bndrX) answer[0]++;
//         break;
//       }
//     }
//   });

//   return answer;
// }

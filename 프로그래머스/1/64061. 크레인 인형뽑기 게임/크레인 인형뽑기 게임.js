function solution(board, moves) {
    let reverseBoard = board.reverse();
    let newBoard = [[0]];
    let stack = [];
    let cnt = 0;
    
    // 원래 보드 배열을 반대로 바꾼 후, 위치 순서별로 새 이중배열 생성
    // [
    //   [ 0 ], -> 해당 배열은 편의상 넣어준 것
    //   [ 3, 4 ],
    //   [ 5, 2, 2 ],
    //   [ 1, 4, 5, 1 ],
    //   [ 3, 4 ],
    //   [ 1, 2, 1, 3 ]
    // ]
    
    for(let i = 0; i < board.length; i++){
        let arr = []
        for(let j = 0; j < board.length; j++){
            if(reverseBoard[j][i]!==0) arr.push(reverseBoard[j][i])
        }
        newBoard.push(arr)
    }
    
    // 위치에 따라 stack에 넣은 후 같은 것 터트리기
    moves.map((v) => {
        // 위치에 인형이 있을 경우,
        // 위치 맨 위에 있는 인형을 stack에 넣은 후, pop하기
        let vLast = newBoard[v].length-1;
        let doll = newBoard[v][vLast]
        if(doll!== undefined) {
            stack.push(doll);
            newBoard[v].pop();
        }
        
        // 길이가 2 이상이고,
        // 스택에 들어온 것과 이전 값이 같으면 cnt 2 증가 후, 두번 pop 하기
        let sLength = stack.length;
        
        if(sLength>1 && stack[sLength-1] === stack[sLength-2]) {
        
            console.log(v, stack)
            cnt += 2;
            stack.pop();
            stack.pop();
        }
    })
    return cnt;
    
}
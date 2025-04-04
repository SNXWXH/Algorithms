const solution = (input) => {
  let [N, M, X] = input[0].split(' ').map(Number);
  let tree = input[1].split(' ').map(Number);
  const Q = +input[2];
  const D = input[3].split(' ');

  let ans = 0;
  let grow = 0;

  for (let i = 0; i < Q; i++) {
    let height = tree[X - 1] + grow;
    if (height >= M) {
      ans += height;
      tree[X - 1] = -grow;
    }

    grow++;

    if (D[i] === 'R') X = (X % N) + 1;
    else if (D[i] === 'L') X = ((X - 2 + N) % N) + 1;
  }

  console.log(ans);
};

//! 계속 시간 초과 남(그럴 수 밖에 없음)
// const solution = (input) => {
// 	let [N, M, X] = input[0].split(" ").map((v)=> Number(v));
// 	let tree = input[1].split(" ").map((v)=> Number(v));
// 	const Q = +input[2];
// 	const D = input[3].split(" ")
// 	let ans = 0;

// 	for(let i = 0; i < Q; i++){
// 		if (D[i] === 'R') X = (X % N) + 1;
// 		else if (D[i] === 'L') X = (X - 2 + N) % N + 1;

// 		if(tree[X-1] >= M){
// 			ans += tree[X-1];
// 			tree[X-1] = 0
// 		}

// 		// 시간초과 나서 수정
// 		// tree = tree.map((v) => v+=1);
// 		for (let j = 0; j < N; j++) {
// 			tree[j]++;
// 		}

// 		if (D[i] === 'R') X = (X % N) + 1;
// 		else if (D[i] === 'L') X = (X - 2 + N) % N + 1;
// 	}

// 	console.log(ans)
// }

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    input.push(line);
    if (input.length === 4) rl.close();
  }

  solution(input);

  process.exit();
})();

const solution = (N, M, goorm, friend, arr) => {
  const goormMap = new Map();
  const friendMap = new Map();

  goorm.forEach((item, idx) => goormMap.set(item, idx));
  friend.forEach((item, idx) => friendMap.set(item, idx));

  arr.forEach(([g, f]) => {
    if (goormMap.has(g) && friendMap.has(f)) {
      const gIdx = goormMap.get(g);
      const fIdx = friendMap.get(f);

      goorm[gIdx] = f;
      friend[fIdx] = g;

      goormMap.set(f, gIdx);
      friendMap.set(g, fIdx);
      goormMap.delete(g);
      friendMap.delete(f);
    }
  });

  console.log(goorm.sort().join(' '));
};

// includes랑 indexof 써서 시간초과 남
// const solution = (N, M, goorm, friend, arr) => {
// 	arr.forEach((v) => {
// 		const [g, f] = v

// 		if(goorm.includes(g) && friend.includes(f)){
// 			goorm[goorm.indexOf(g)] = f
// 			friend[friend.indexOf(f)] = g
// 		}
// 	})

// 	console.log(goorm.sort().join(" "))
// }

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let M = null;
  let goorm = null;
  let friend = null;
  let arr = [];

  for await (const line of rl) {
    if (!N && !M) [N, M] = line.split(' ').map(Number);
    else if (!goorm) goorm = line.split(' ');
    else if (!friend) friend = line.split(' ');
    else arr.push(line.split(' '));

    if (arr.length === M) rl.close();
  }

  solution(N, M, goorm, friend, arr);
  process.exit();
})();

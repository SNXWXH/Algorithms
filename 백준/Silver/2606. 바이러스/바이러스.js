/*
TODO: 바이러스는 양방향으로 됨 지금은 단방향으로 되는거임 <양 쪽에서 다 되게 수정해야함> 어케하냐 그거
*/

const file = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

const a = input.map((v) => v.split(" "));

const computer = +a[0][0];

let obj = {};

for (let i = 2; i < a.length; i++) {
  const [k, v] = a[i].map((e) => +e);
  if (!obj.hasOwnProperty(k)) obj[k] = [v];
  if (obj.hasOwnProperty(k)) obj[k].push(v);
  if (!obj.hasOwnProperty(v)) obj[v] = [k];
  if (obj.hasOwnProperty(v)) obj[v].push(k);
}

const virusCom = new Array(computer).fill(0);

const virus = (i) => {
  virusCom[i - 1] = 1;
  if (obj.hasOwnProperty(i)) {
    const virusComputer = obj[i];
    for (const v of virusComputer) {
      if (virusCom[v - 1] === 0) virus(v);
    }
  }
};

virus(1);

const ans = virusCom.filter((v) => v === 1);

console.log(ans.length - 1);

const file = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(file).toString().trim();

const lines = input.split("\n");
const T = parseInt(lines[0], 10);
let result = [];

for (let i = 1; i <= T; i++) {
  const N = parseInt(lines[i * 2 - 1], 10);
  const cards = lines[i * 2].split(" ");
  let deck = [cards[0]];

  for (let j = 1; j < N; j++) {
    if (cards[j] <= deck[0]) {
      deck.unshift(cards[j]);
    } else {
      deck.push(cards[j]);
    }
  }

  result.push(deck.join(""));
}

console.log(result.join("\n"));

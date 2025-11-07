const file = process.platform === 'linux' ? 0 : './input.txt';
let [H, M] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const culMin = (min) => {
  if (min >= 60) {
    let hour = parseInt(min / 60);
    const left = min / 60;

    M = left;
    H += hour;
  } else if (min < 0) {
    H -= 1;
    M = 60 + min;
  } else M -= 45;
};

const culHour = (hour) => {
  if (hour >= 24) {
    let left = hour / 24;
    H = left;
  } else if (hour < 0) H = 24 + hour;
};

culMin(M - 45);
culHour(H);

console.log(`${H} ${M}`);

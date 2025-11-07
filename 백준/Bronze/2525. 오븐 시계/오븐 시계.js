const file = process.platform === 'linux' ? 0 : './input.txt';
const [TIME, COOK] = require('fs')
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n');

let [H, M] = TIME.split(' ').map(Number);

const culMin = (min) => {
  if (min >= 60) {
    let hour = parseInt(min / 60);

    const left = min % 60;

    M = left;
    H += hour;
  } else M += +COOK;
};

const culHour = (hour) => {
  if (hour == 24) H = 0;
  if (hour >= 24) {
    let left = hour % 24;

    H = left;
  } else if (hour < 0) H = 24 + hour;
};

culMin(M + +COOK);
culHour(H);

console.log(`${H} ${M}`);

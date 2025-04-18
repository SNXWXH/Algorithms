// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let input = [];

  for await (const line of rl) {
    if (!N) N = line;
    else input.push(line);
    if (input.length === N) rl.close();
  }

  let arr = input.map((v) => v.split(' '));

  let obj = {};

  arr.forEach((v) => {
    if (obj[v[0]]) {
      let base = obj[v[0]];
      obj[v[0]] = base + +v[1];
    } else obj[v[0]] = +v[1];
  });

  let sortedObj = {};

  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key] = obj[key];
    });

  for (let key in sortedObj) {
    let value = sortedObj[key];
    console.log(key, value);
  }

  process.exit();
})();

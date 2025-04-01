const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    const [w, r] = line.split(' ');
    let ans = Math.floor(w * (1 + r / 30));

    console.log(ans);
    rl.close();
  }

  process.exit();
})();

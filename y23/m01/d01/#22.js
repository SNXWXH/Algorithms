const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let string = "";

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  // console.log(Number(input[0]));

  for (let i = 0; i < Number(input[0]); i++) {
    for (let j = 0; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
});

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     for (let i = 1; i <= +input[0]; i++) {
//         console.log('*'.repeat(i));
//     }
// });

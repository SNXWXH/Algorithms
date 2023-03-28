const file =
process.platform === "linux" ? 0: "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

let H = Number(input[0]);
let M = Number(input[1]);

if(M-45>=0)
	console.log(H+" "+(M-45));
else {
    if(H-1<0) H = H+24; console.log((H-1)+" "+(M+15));
}
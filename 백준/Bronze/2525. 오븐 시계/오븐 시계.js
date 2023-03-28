const file = 
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let H = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);
let min = Number(input[1]);

if((M+min)<=59)
	console.log(H+" "+(M+min));
else {
	let a = parseInt((min+M)/60);
	let b = parseInt((min+M)%60);
	let c = parseInt(H+a);
	if((H+a)>=24) c = parseInt((H+a)-24);
	console.log((c)+" "+b);
}
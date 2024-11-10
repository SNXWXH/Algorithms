const input = +require('fs').readFileSync('./dev/stdin').toString().trim();

if (input == 1 || input == 3) {
	console.log(-1);
} else {
	const x = input % 5;
	let n = (input - x) / 5;

	switch (x) {
		case 0:
			console.log(n);
			return;
		case 1:
		case 4:
			console.log(n + 2);
			return;
		case 2:
			console.log(n + 1);
			return;
		case 3:
			console.log(n + 3);
			return;
	}
}
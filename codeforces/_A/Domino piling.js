const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

rl.on("line", line => {
	const [m, n] = line.split(" ").map(Number);
	const totalSquares = m * n;
	const maxDominoes = Math.floor(totalSquares / 2);
	console.log(maxDominoes);
});

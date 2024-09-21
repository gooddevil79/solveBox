const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

rl.on("line", line => {
	const numbers = line
		.trim()
		.split("+")
		.sort((a, b) => a - b);
	console.log(numbers.join("+"));
});

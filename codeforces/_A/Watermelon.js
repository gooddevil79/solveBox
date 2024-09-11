const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

rl.on("line", line => {
	const weight = parseInt(line);
	const result = weight % 2 === 0 && weight > 2 ? "YES" : "NO";
	console.log(result);
});

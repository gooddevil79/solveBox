const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const lines = [];
rl.on("line", line => {
	lines.push(line.trim().toLowerCase());
	if (lines.length === 2) rl.close();
});

rl.on("close", () => {
	const [firstString, secondString] = lines;
	console.log(firstString.localeCompare(secondString));
});

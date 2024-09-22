const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

rl.on("line", word => {
	const capitalizedWord = word[0].toUpperCase() + word.slice(1);
	console.log(capitalizedWord);
});

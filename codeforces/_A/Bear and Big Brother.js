const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

rl.on("line", bearBrothers => {
	let [limak, bob] = bearBrothers.split(" ").map(Number);
	let year = 0;
	while (limak <= bob) {
		limak *= 3;
		bob *= 2;
		year++;
	}
	console.log(year);
});

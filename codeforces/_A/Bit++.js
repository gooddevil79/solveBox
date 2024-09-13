const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

let X = 0;
let statements = 0;
let isFirstLine = true;
rl.on("line", line => {
	if (isFirstLine) {
		statements = parseInt(line);
		isFirstLine = false;
		return;
	} else {
		eval(line);
		--statements;
		if (statements == 0) {
			console.log(X);
			rl.close();
		}
	}
});

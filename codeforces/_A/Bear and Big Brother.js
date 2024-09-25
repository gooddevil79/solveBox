const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const calculateYears = (linkWeight, bobWeight, year = 0) => {
	if (linkWeight > bobWeight) {
		return year;
	}
	return calculateYears(linkWeight * 3, bobWeight * 2, year + 1);
};
rl.on("line", bearBrothers => {
	let [link, bob] = bearBrothers.split(" ").map(Number);
	console.log(calculateYears(link, bob));
});

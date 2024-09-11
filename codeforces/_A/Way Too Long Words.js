const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});
let maxLength = 0;
let isFirstLine = true;

const validateLength = () => {
	if (isNaN(maxLength) || maxLength <= 0) {
		process.exit(1);
	}
};

const handleAbbreviation = word => {
	if (word.length <= maxLength) console.log(word);
	else console.log(`${word[0]}${word.length - 2}${word[word.length - 1]}`);
};

rl.on("line", word => {
	if (isFirstLine) {
		maxLength = parseInt(word);
		validateLength();
		isFirstLine = false;
		return;
	} else handleAbbreviation(word);
});

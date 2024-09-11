const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const handleAbbreviation = word => {
	if (word.length <= 10) console.log(word);
	else console.log(`${word[0]}${word.length - 2}${word[word.length - 1]}`);
};
const isValid = value => !isNaN(parseInt(value));
rl.on("line", word => {
	if (isValid(word)) {
		return;
	} else handleAbbreviation(word);
});

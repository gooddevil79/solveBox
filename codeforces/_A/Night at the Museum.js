const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const getRotation = (curChar, prevChar) => {
	const ALPHABET_LENGTH = 26;
	const forwardCharsDistance = Math.abs(
		curChar.charCodeAt(0) - prevChar.charCodeAt(0)
	);
	const backwardCharsDistance = ALPHABET_LENGTH - forwardCharsDistance;
	return Math.min(forwardCharsDistance, backwardCharsDistance);
};

rl.on("line", word => {
	let rotations = 0;
	let pointer = "a";
	word.split("").forEach(char => {
		rotations += getRotation(char, pointer);
		pointer = char;
	});
	console.log(rotations);
});

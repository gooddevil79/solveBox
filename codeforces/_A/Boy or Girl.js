const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const getDistinctCharactersCount = str => new Set(str).size;
const isOdd = number => number % 2 !== 0;
const act = isMale => (isMale ? "IGNORE HIM!" : "CHAT WITH HER!");
const compose3 = (f, g, h) => x => f(g(h(x)));
const determineGender = compose3(act, isOdd, getDistinctCharactersCount);

rl.on("line", username => {
	console.log(determineGender(username));
});

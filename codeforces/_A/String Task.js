const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const toLowerCase = string => string.toLowerCase();
const removeVowels = string => {
	const regex = /[aeiouyAEIOUY]/g;
	return string.replace(regex, "");
};
const insertDots = string => {
	if (!string.length) return "";
	return "." + string[0] + insertDots(string.slice(1));
};
const composeFn = (f, g, h) => x => f(g(h(x)));
const stringFormatter = composeFn(insertDots, removeVowels, toLowerCase);
rl.on("line", string => {
	console.log(stringFormatter(string));
});

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

let numberOfProblems = 0;
let isFirstLine = true;
let problemViews = [];

const gotAllProblemViews = (views, total) => views.length === total;

const countProblemsToImplement = views =>
	views.reduce((count, view) => {
		return isImplementable(view) ? count + 1 : count;
	}, 0);

const isImplementable = cur =>
	cur.split(" ").filter(member => member == 1).length >= 2;

rl.on("line", line => {
	if (isFirstLine) {
		numberOfProblems = parseInt(line);
		isFirstLine = false;
		return;
	}
	problemViews.push(line);
	if (gotAllProblemViews(problemViews, numberOfProblems)) {
		console.log(countProblemsToImplement(problemViews));
		rl.close();
	}
});

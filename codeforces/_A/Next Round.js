const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

let mvpPosition = 0;
let isFirstLine = true;

const getScores = line => line.trim().split(" ").map(Number);
const getMvpPoint = (position, scores) => scores[position];
const isQualified = (score, minPoint) => score >= minPoint && score > 0;
const countAdvanced = (scores, minPoint) =>
	scores.filter(score => isQualified(score, minPoint)).length;
const processTournament = line => {
	const scores = getScores(line);
	const minPoint = getMvpPoint(mvpPosition, scores);
	const advancedContestantCount = countAdvanced(scores, minPoint);
	return advancedContestantCount;
};

rl.on("line", line => {
	if (isFirstLine) {
		const [n, k] = line.split(" ").map(Number);
		mvpPosition = k - 1;
		isFirstLine = false;
	} else {
		const advancedContestantCount = processTournament(line);
		console.log(advancedContestantCount);
		rl.close();
	}
});

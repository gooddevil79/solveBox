const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const GOAL_INDEX = 2;
const matrix = [];
rl.on("line", line => {
	matrix.push(line.trim().split(" "));
	if (matrix.length === 5) rl.close();
});

const countStepsToCenter = (row, col) =>
	Math.abs(row - GOAL_INDEX) + Math.abs(col - GOAL_INDEX);
const solvedMatrix = (matrix, goalPlace, { targetCol, targetRow }) => {
	const result = [...matrix];
	if (targetRow > goalPlace) {
		result = result.forEach((row, index) => {
			[result[index], result[index - 1]] = [result[index - 1], row];
		});
	} else {
		result = result.forEach((row, index) => {
			[result[index], result[index - 1]] = [result[index - 1], row];
		});
	}
	if (targetCol > goalPlace) {
		result = result.forEach((row, index) => {
			[result[index], result[index - 1]] = [result[index - 1], row];
		});
	} else {
		result = result.forEach((row, index) => {
			[result[index], result[index - 1]] = [result[index - 1], row];
		});
	}
};

rl.on("close", () => {
	const [targetRow, targetCol] = findTarget(matrix);
	// const solvedMatrix = solveMatrix(matrix, GOAL_INDEX, {
	// 	targetRow,
	// 	targetCol,
	// });
	const steps = countStepsToCenter(targetRow, targetCol);
	console.log(steps);
});

function findTarget(matrix) {
	let targetRow, targetCol;
	matrix.forEach((row, index) => {
		row.forEach((col, j) => {
			if (Number(col) === 1) {
				targetRow = index;
				targetCol = j;
			}
		});
	});

	return [targetRow, targetCol];
}

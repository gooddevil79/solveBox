const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const tilesInLength = (length, tileLength) => Math.ceil(length / tileLength);

const tilesInWidth = (width, tilesWidth) => Math.ceil(width / tilesWidth);

const totalTiles = (l, w) => l * w;

const composeFn = (f, g, h) => (n, m, t) => f(g(n, t), h(m, t));

const calcTilesCount = composeFn(totalTiles, tilesInLength, tilesInWidth);

rl.on("line", dimensions => {
	let [n, m, tileSideSize] = dimensions.split(" ").map(Number);

	console.log(calcTilesCount(n, m, tileSideSize));
});

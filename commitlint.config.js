module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			["solve", "fix", "chore", "refactor", "general"],
		],
		"scope-enum": [
			2,
			"always",
			[
				"codeforces:A",
				"codeforces:B",
				"codeforces:C",
				"codeforces:D",
				"codeforces:E",
				"codeforces:F",
				"codewars",
			],
		],
		"subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]],
		"subject-empty": [2, "never"],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"scope-empty": [2, "never"],
	},
};

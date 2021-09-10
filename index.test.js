const { solveLinear } = require("./index");

console.log("jkjk");

test("Should return 0 if c = 0", () => {
	expect(solveLinear(1, 0)).toBeCloseTo(0);
});
test("Should return -1", () => {
	expect(solveLinear(1, 1)).toBe(-1);
});

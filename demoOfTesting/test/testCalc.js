const expect = require("chai").expect;
const fetch = require("node-fetch");
const PORT = 666;
const URL = `http://localhost:${PORT}`;
let server;

const calc = require("../calc");

describe("Calculator API", function() {
	describe("Testing the basic Calc API", function() {
		it("Add 2 + 5 should return 7", function() {
			const res = calc.add(2, 5);
			expect(res).to.be.equal(7);
		});
		it("Substract 7 - 4 should return 3", function() {
			const res = calc.substract(7, 4);
			expect(res).to.be.equal(3);
		});
		it("Divide 8 / 2 should return 4", function() {
			const res = calc.divide(8, 2);
			expect(res).to.be.equal(4);
		});
		it("Divide 8 / 0 should return infinity", function() {
			const res = calc.divide(8, 0);
			expect(res).to.be.equal(Infinity);
		});
	});

	describe("Testing the REST Calc API", function() {
		before(function(done) {
			calc.calcServer(PORT, function(s) {
				server = s;
				done();
			});
		});
		after(function() {
			server.close();
		});
		it("Add 2 + 5 should return 7", async function() {
			const res = await fetch(`${URL}/api/calc/add/2/5`).then(r => r.text());
			expect(res).to.be.equal("7");
		});
	});
});

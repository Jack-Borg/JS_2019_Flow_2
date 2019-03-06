const expect = require("chai").expect;
const sortDir = require("../sortDir");
const fs = require("fs-extra");
const filePath = "test/tmpDir/";

describe("SortDir", function() {
	before(function(done) {
		fs.mkdirSync(filePath);
		fs.writeFileSync(filePath + "tmp1.js");
		fs.writeFileSync(filePath + "tmp2.txt");
		fs.writeFileSync(filePath + "tmp3.js");
		fs.writeFileSync(filePath + "tmp4.txt");
		fs.writeFileSync(filePath + "tmp5.js");
		done();
	});
	it("Read from test/tmpDir/ should", function() {
		sortDir(filePath, "js", function(err, files) {
			expect(files).to.be.deep.equal(["tmp1.js", "tmp3.js", "tmp5.js"]);
		});
	});
	after(function() {
		fs.removeSync(filePath);
	});
});

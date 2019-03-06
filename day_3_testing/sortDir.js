const fs = require("fs");
const path = require("path");

module.exports = sortDir;

function sortDir(filePath, ext, callback) {
	if (!ext.startsWith(".")) {
		ext = "." + ext;
	}
	fs.readdir(filePath, function(err, data) {
		if (err) {
			return callback(err);
		} else {
			data = data.filter(file => path.extname(file) == ext);
			return callback(err, data);
		}
	});
}

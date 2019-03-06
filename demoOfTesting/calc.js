const express = require("express");
const http = require("http");

/*basic Calc API */
function add(n1, n2) {
	return n1 + n2;
}

function substract(n1, n2) {
	return n1 - n2;
}

function divide(n1, n2) {
	return n1 / n2;
}

/* REST Calc API */
function calcServer(port, isStartedCb) {
	const app = express();
	app.get("/api/calc/add/:n1/:n2", (req, res) => {
		const n1 = Number(req.params.n1);
		const n2 = Number(req.params.n2);
		res.send(add(n1, n2).toString());
	});

	let server = http.createServer(app);
	setTimeout(() => {
		server.listen(port, () => {
			isStartedCb(server);
		});
	}, 1500);
}

module.exports = { add, substract, divide, calcServer };

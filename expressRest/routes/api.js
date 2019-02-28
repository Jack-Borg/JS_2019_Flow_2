var express = require("express");
var router = express.Router();
var jokes = require("../model/jokes");

/* GET users listing. */
router.get("/", function(req, res, next) {
	res.send("respond with a resource");
});

router.get("/random", function(req, res, next) {
	res.json({ joke: jokes.getRandomJoke() });
});

router.get("/err", function(req, res, next) {
	if (true) {
		var err = new Error("hovsa");
		err.isJson = true;
		return next(err);
	}
	res.json(jokes.getRandomJoke());
});

module.exports = router;

var express = require("express");
var router = express.Router();
var jokes = require("../model/jokes");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express", userName: req.session.userName });
});

router.get("/login", function(req, res, next) {
	res.render("login", { title: "Login" });
});

router.post("/login", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/joke", function(req, res, next) {
	let counter = req.session.jokeCounter;
	counter++;
	req.session.jokeCounter = counter;
	res.render("randomJoke", { title: "Joke", joke: jokes.getRandomJoke() });
});

router.get("/jokes", function(req, res, next) {
	let counter = req.session.jokesCounter;
	counter++;
	req.session.jokesCounter = counter;
	res.render("allJokes", { title: "Jokes", jokes: jokes.getAllJokes() });
});

router.get("/addjoke", function(req, res, next) {
	res.render("addJoke", { title: "Add Joke" });
});

router.post("/storejoke", function(req, res, next) {
	let counter = req.session.storeJokeCounter;
	counter++;
	req.session.storeJokeCounter = counter;

	const joke = req.body.joke;

	jokes.addJoke(joke);

	res.render("addJoke", { title: "Add Joke" });
});

module.exports = router;

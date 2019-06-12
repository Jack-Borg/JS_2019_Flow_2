var jokes = [
	"A day without sunshine is like, night.",
	"At what age is it appropriate to tell my dog that he's adopted?",
	"I intend to live forever, or die trying"
];

class Jokes {
	constructor(jokes) {
		this._jokes = jokes;
	}
	getRandomJoke() {
		return this._jokes[Math.floor(Math.random() * this._jokes.length)];
	}
	getAllJokes() {
		return this._jokes;
	}
	addJoke(joke) {
		this._jokes.push(joke);
	}
}

module.exports = new Jokes(jokes);

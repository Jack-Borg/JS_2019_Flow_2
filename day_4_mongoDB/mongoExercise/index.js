const mongoose = require("mongoose");
mongoose
	.connect(
		"mongodb+srv://jackborg:admin@mongodb-ikrgp.mongodb.net/mongo-games?retryWrites=true",
		{
			useNewUrlParser: true
		}
	)
	.then(() => "You are now connected to Mongo!")
	.catch(err => console.error("Something went wrong", err));

// setTimeout(() => {
// 	mongoose.disconnect(() => console.log("Disconncted"));
// }, 3000);

const gameSchema = new mongoose.Schema({
	title: String,
	publisher: String,
	tags: [String],
	date: {
		type: Date,
		default: Date.now
	},
	onSale: Boolean,
	price: Number
});

const Game = mongoose.model("Game", gameSchema);

async function saveGames() {
	await Game.deleteMany({});
	var games = [
		{
			tags: ["adventure", "action"],
			title: "The Legend of Zelda: Breath of the Wild",
			publisher: "Nintendo",
			onSale: false,
			price: 59.99,
			date: "2018-06-04T18:43:28.423Z"
		},
		{
			tags: ["adventure", "action"],
			title: "Super Mario Odyssey",
			publisher: "Nintendo",
			onSale: true,
			price: 45,
			date: "2018-06-04T20:47:29.661Z"
		},
		{
			tags: ["racing", "sports"],
			title: "Mario Kart 8 Deluxe",
			publisher: "Nintendo",
			onSale: false,
			price: 59.99,
			date: "2018-06-04T20:49:10.180Z"
		},
		{
			tags: ["action", "shooter"],
			title: "Splatoon 2",
			publisher: "Nintendo",
			onSale: true,
			price: 35.99,
			date: "2018-06-04T20:51:17.812Z"
		},
		{
			tags: ["side scroller", "platformer"],
			title: "Rayman Legends",
			publisher: "Ubisoft",
			onSale: false,
			price: 49.99,
			date: "2018-06-04T20:52:08.460Z"
		},
		{
			tags: ["simulation", "farming"],
			title: "Stardew Valley",
			publisher: "Chucklefish",
			onSale: false,
			price: 19.99,
			date: "2018-06-04T20:53:14.535Z"
		},
		{
			tags: ["adventure", "platformer"],
			title: "Shovel Knight: Treasure Trove",
			publisher: "Yacht Club Games",
			onSale: true,
			price: 10.99,
			date: "2018-06-04T20:54:07.257Z"
		}
	];
	var newGames = await Game.insertMany(games);
	console.log(newGames);
}

async function getGames() {
	const games = await Game.find()
		.or([{ publisher: "Nintendo" }, { price: { $gt: 12, $lt: 50 } }])
		.sort({ price: 1 })
		.select({ title: 1, price: 1, onsale: 1, _id: 0 });
	console.log(games);
}

async function updateGame(id) {
	const result = await Game.update(
		{ _id: id },
		{
			$set: {
				title: "A Link Between Worlds",
				price: 55
			}
		}
	);
	console.log(result);
}

const result = await Game.update(
	{ _id: id },
	{
		$set: {
			title: "A Link Between Worlds",
			price: 55
		}
	}
);
console.log(result);

getGames();
// saveGames();

var mongoose = require("mongoose");

mongoose
	.connect("mongodb+srv://jackborg:admin@mongodb-ikrgp.mongodb.net/demo1?retryWrites=true", {
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(con => console.log("Connected to Mongo"))
	.catch(err => console.log("err", err));

setTimeout(() => {
	mongoose.disconnect(() => console.log("Disconncted"));
}, 3000);

var userSchema = new mongoose.Schema({
	userName: String,
	email: { type: String, unique: true },
	modified: { type: Date, default: Date.now }
});
// Build the User model
var User = mongoose.model("User", userSchema);

async function addUser(userName, email) {
	var user = new User({ userName, email });
	await user.save();
}

async function testAddUser() {
	try {
		await User.deleteMany({});
		await addUser("a", "abc@a.b");
		await addUser("b", "123@a.b");
		await addUser("c", "asd@a.b");
		await addUser("d", "ags@a.b");
		await addUser("e", "gas@a.b");
		await addUser("f", "542@a.b");
		await addUser("Kurt Wonnegut", "kw@a.b");
		await addUser("Hanne Wonnegut", "hw@a.b");
		await addUser("Ib Wonnegut", "iw@a.b");
		console.log("Users added");
	} catch (err) {
		console.error("error in addUser()", err);
	}
}

async function findUser(fields, projection) {
	const users = await User.find({ userName: /Wonnegut/i }, { userName: 1, _id: 0 })
		.sort({ userName: -1 })
		.collation({ locale: "da" })
		.limit(6);
	console.log("found users\n", users);
	return users;
	// return await User.find(fields, projection);
}

async function editUser() {
	var user = await User.findOneAndUpdate({ userName: "a" }, { email: "new@a.b" }, { new: true });
	console.log("editUser ", user);
}

async function deleteUser() {
	await User.findOneAndDelete({ userName: "b" });
	var user = await User.findOne({ userName: "b" });

	console.log("status", user);
}

async function testUser() {
	await testAddUser();
	// await findUser();
	// await editUser();
	await deleteUser();
}

testUser();

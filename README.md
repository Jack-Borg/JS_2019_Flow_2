# Node.js/Express

![Full Stack JavaScript](https://www.altexsoft.com/media/2016/11/Full-Stack-JS.png)

## Why would you consider a Scripting Language as JavaScript as your Backend Platform?

Using Node.js as your server technology gives your team a great boost that comes from using the same language on both the front end and the back end. This, means that your team is more efficient and cross-functional, which, in turn, leads to lower development costs. In addition to that, it’s worth mentioning that JavaScript is the most popular programming language, so your application’s codebase will be easier to understand for more engineers. You can also reuse and share the code between the frontend and the backend parts of your application, which speeds up the development process. On top of that, the Node.js community is constantly growing – the number of StackOverflow questions is steadily increasing, so the knowledge base for the technology is widely available. The fact that the whole Node.js technology stack is open-source and free is also great news. Finally, Node offers a great package manager, npm, and the amount of available open-source tools in npm’s registry is massive and growing fast.

## Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat

### Pros

#### Robust technology stack

Using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:

-   better efficiency and overall developer productivity
-   code sharing and reuse
-   speed and performance
-   easy knowledge sharing within a team
-   huge number of free tools

Consequently, your team is a lot more flexible, the development is less time-consuming and as a result you get fast and reliable software.

Despite a common belief, with full stack web development you are in no way limited to the traditional MEAN (MongoDB, Express.js, AngularJS, and Node.js) stack. The only must-have in this case is Node.js (there is no alternative in JavaScript for backend programming). The rest of the technologies within this stack are optional and may be replaced with some other tools providing similar functionality (read about the alternatives in our separate article).

#### Fast and event-based

When using a common language for both client- and server-side, synchronization happens fast, which is especially helpful for event-based, real-time applications. Thanks to its asynchronous, non-blocking, single-threaded nature, Node.js is a popular choice for online gaming, chats, video conferences, or any solution that requires constantly updated data.

Not only does app performance benefit from Node.js’ lightness, the team’s productivity will increase as well. Developers trained in frontend JavaScript can start programming the server side with the minimum learning curve. With the same language on both sides, you can reuse code on front-end and back-end by wrapping it into modules and creating a new level of abstraction.

#### Scalable technology for microservices

Since it’s a lightweight technology tool, using Node.js for microservices architecture is a great choice. This architectural style is best described by Martin Fowler and James Lewis as “an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API.”

Accordingly, breaking the application logic into smaller modules, microservices, instead of creating a single, large monolithic core, you enable better flexibility and lay the groundwork for further growth. As a result, it is much easier to add more microservices on top of the existing ones than to integrate additional features with the basic app functionality.

![Monolithic vs Microservices](https://www.altexsoft.com/media/2016/11/The-difference-between-the-monolithic-and-microservices-architecture-1.png)

With each microservice communicating with the database directly through streams, such architecture allows for better performance and speed of application.

#### Rich ecosystem

One word – npm, a default Node.js package manager, it also serves as a marketplace for open source JavaScript tools, which plays an important role in the advance of this technology. With about 350,000 tools available in the npm registry as of now, and over 10,000 new ones being published every week, the Node.js ecosystem is quite rich.

With such a vast variety of free tools accessible in a few clicks, there is a huge potential for the use of Node.js. At the same time, open source software enjoys a growing popularity as it allows you to build new solutions reducing the overall costs of development and time to market.

### Cons

#### Performance bottlenecks and design issues

Two of the most argued about aspects of Node.js programming are its insufficiency with heavy computations and the so-called “callback hell”. Before we get into too many details, let’s figure out what’s what.

As we know, JavaScript (and, as a result, Node.js) is asynchronous by nature and has a non-blocking I/O (input/output) model. This means, it can process several simple tasks (for example, read/write database queries) queued in the background without blocking the main thread and do so quickly.

At the same time, Node.js is a single-threaded environment, which is often considered a serious drawback of the technology. Indeed, in some cases, a CPU-bound task (number crunching, various calculations) can block the event loop resulting in seconds of delay for all Node.js website users.

This represents a serious issue. That is why, to avoid it, it is recommended not to use Node.js with computation-heavy systems.

Due to its asynchronous nature, Node.js relies heavily on callbacks, the functions that run after each task in the queue is finished. Keeping a number of queued tasks in the background, each with its callback, might result in the so-called callback hell, which directly impacts the quality of code. Simply put, it’s a “situation where callbacks are nested within other callbacks several levels deep, potentially making it difficult to understand and maintain the code.”

Yet, this is often considered a sign of poor coding standards and lack of experience with JavaScript and Node.js in particular.

#### Immaturity of tooling

Although, the core Node.js modules are quite stable and can be considered mature, there are many tools in the npm registry which are either of poor quality or not properly documented/tested. Moreover, the registry itself isn’t structured well enough to offer the tools based on their rating or quality. Hence it might be difficult to find the best solution for your purposes without knowing what to look for.

The fact that the Node.js ecosystem is mostly open source, has its impact as well. While the quality of the core Node.js technology is supervised by Joyent and other major contributors, the rest of the tools might lack the quality and high coding standards set by global organizations.

### Conclusion

Obviously, with all the listed Node.js advantages and disadvantages, the technology is no silver bullet. But neither is Java, .Net framework or PHP. Yet, there are specific cases where each one of the technologies perform best. For Node.js, these are real-time applications with intense I/O, requiring speed and scalability.

This might be social networks, gaming apps, live chats or forums as well as stock exchange software or ad servers, where speed is everything. Fast and scalable, Node.js is the technology of choice for data-intensive, real-time IoT devices and applications.

Due to its non-blocking architecture, Node.js works well for encoding and broadcasting video and audio, uploading multiple files, and data streaming.

Recently, Node.js has been actively used in enterprise-level software. While there is still much argument about this, many large companies and global organizations, such as NASA, have already adopted Node.js. And the enterprise Node.js ecosystem continues to mature.

Yet, you can’t choose a language or tool just because another super-successful company did. It makes no sense to look at the others when your product and your business is at stake. You need to get your priorities straight and clearly identify the benefits the technology will give you, without forgetting about the hidden drawbacks.

## Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server

Node JS follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.

As Node JS follows this architecture, it can handle more and more concurrent client requests very easily.

The main heart of Node JS Processing model is “Event Loop”. If we understand this, then it is very easy to understand the Node JS Internals.

### Single Threaded Event Loop Model Processing Steps

-   Clients Send request to Web Server.
-   Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
-   Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”.
-   Node JS Web Server internally has a Component, known as “Event Loop”. Why it got this name is that it uses indefinite loop to receive requests and process them.
-   Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.
-   Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
-   If yes, then pick up one Client Request from Event Queue
    -   Starts process that Client Request
    -   If that Client Request Does Not requires any Blocking IO
    -   Operations, then process everything, prepare response and send it back to client.
    -   If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
        -   Checks Threads availability from Internal Thread Pool
        -   Picks up one Thread and assign this Client Request to that thread.
        -   That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
        -   Event Loop in turn, sends that Response to the respective Client.

![Node JS Architecture – Single Threaded Event Loop](https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-768x576.png)

## Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

[Deploying Node.js app on digital ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

### Ensure that you Node-process restarts after a (potential) exception that closed the application

If you start your server with [`forever`](https://github.com/nodejitsu/forever), you can use:

```js
process.on("uncaughtException", function(err) {
	console.log(err); //Send some notification about the error
	process.exit(1);
});
```

and the `forever` will automatically restart the server

```
Express server listening on port 3000
error: Forever detected script exited with code: 1
error: Forever restarting script for 2 time
Express server listening on port 3000
```

### Ensure that you Node-process restarts after a server (Ubuntu) restart

same as above

### Ensure that you can take advantage of a multi-core system

A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.

The cluster module allows easy creation of child processes that all share server ports.

```js
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end("hello world\n");
	}).listen(8000);

	console.log(`Worker ${process.pid} started`);
}
```

### Ensure that you can run “many” node-applications on a single droplet on the same port (80)

Can be done by implementing a reverse proxy i.e. nginx

## Explain the difference between “Debug outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code

### Disadvantages of console

One of the biggest disadvantages is that you can’t toggle logging on and off, not out of the box at least. You could wrap console and extend it to do this, but this is code you’ll have to write, and likely code that will have to overwrite the built-in console functions.

You might want to turn off logging if you’re in a development environment vs a production environment. Or even if you’re just testing locally on your machine or VM, if you’ve got a ton of logging for debug purposes or otherwise, that can really clutter up your console and you might want to just test with logging disabled for a bit.

Another disadvantage of console comes when you need to know log levels.

While it already has what appear to be log levels (see below), these are really just functions that route to stdout and stderr without providing true log levels.

```js
console.log() --> writes to stdout
console.debug() --> writes to stdout
console.info() --> writes to stdout

console.error() --> writes to stderr
console.warn() --> writes to stderr
```

So in the Node console, you won’t be able to tell these logs apart unless you prepend a string with the level to the logs.

### Logging frameworks

Popular Node logging frameworks like Winston and Bunyan allow for log levels, easy toggling logs on and off based on environment, and sometimes (in the case of Winston) support for custom log levels that you as a developer can define.

Logging frameworks will also (generally) support writing to more than just stdout/stderr

## Demonstrate a system using application logging and “coloured” debug statements

Logging using Winston:

```js
const app = express();
const winston = require("winston");
const consoleTransport = new winston.transports.Console();
const myWinstonOptions = {
	transports: [consoleTransport]
};
const logger = new winston.createLogger(myWinstonOptions);

function logRequest(req, res, next) {
	logger.info(req.url);
	next();
}
app.use(logRequest);

function logError(err, req, res, next) {
	logger.error(err);
	next();
}
app.use(logError);
```

### Colored debug statements:

The debug module has a great namespace feature that allows you to enable or disable debug functions in groups. It is very simple–you separate namespaces by colons, like this:

```js
debug("app:meta")("config loaded");
debug("app:database")("querying db...");
debug("app:database")("got results!", results);
```

Enable debug functions in Node by passing the process name via the DEBUG environment variable. The following would enable the database debug function but not meta:

```
$ DEBUG='app:database' node app.js
```

To enable both, list both names, separated by commas:

```
$ DEBUG='app:database,app:meta' node app.js
```

Alternately, use the asterisk wildcard character (\*) to enable any debugger in that namespace. For example, the following enables any debug function whose name starts with “app:":

```
$ DEBUG='app:*' node app.js
```

You can get as granular as you want with debug namespaces…

```
debug('myapp:thirdparty:identica:auth')('success!');
debug('myapp:thirdparty:twitter:auth')('success!');
```

## Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages

We can test our code with `mocha`, and use `chai`'s `expect` to make our tests more readable.

```js
const expect = require("chai").expect;
describe("Calculator API", function() {
	describe("Testing the basic Calc API", function() {
		it("9 / 3 should return 7", function() {
			expect(calc.divide(9, 3)).to.be.equal(3);
		});
		it("4 / 0 should throw error", function() {
			expect(() => calc.divide(4, 0)).to.throw(/Attempt to divide by zero/);
		});
	});
	describe("Testing the REST Calc API", function() {
		before(function(done) {
			calc.calcServer(PORT, function(s) {
				server = s;
				done();
			});
		});
		it("4 + 3 should return 7", async function() {
			const res = await fetch(URL + "add/4/3").then(r => r.text());
			expect(res).to.be.equal("7");
		});
		after(function() {
			server.close();
		});
	});
});
```

It is important to note that arrow functions should not be used with mocha, due to the behavior of this and will not be able to access the mocha context

## Explain, using relevant examples, the Express concept; middleware

A middleware with no mount path will be executed every time the app recieves a request

```js
var app = express();

app.use(function(req, res, next) {
	console.log("Time:", Date.now());
	next();
});
```

A middleware function mounted on a path. The function is executed for any type of HTTP request on the path.

```js
app.use("/user/:id", function(req, res, next) {
	console.log("Request Type:", req.method);
	next();
});
```

A middleware function mounted on a path. The function is executed for HTTP requests with method GET on the path.

```js
app.get("/user/:id", function(req, res, next) {
	console.log("ID:", req.params.id);
	next();
});
```

Error-handling middleware

```js
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});
```

## Explain, using relevant examples, how to implement sessions and the legal implications of doing this

```js
var cookieSession = require("cookie-session");
app.use(
	cookieSession({
		name: "session",
		secret: "I_should_never_be_visible_in_code",

		// Cookie Options
		maxAge: 30 * 60 * 1000 // 30 minutes
	})
);
```

Recital 30 of the GDPR states:  
Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags.  
This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them.  
In short: when cookies can identify an individual via their device, it is considered personal data.

Not complying to the laws will result in severe punishment.

## Compare the express strategy toward (server side) templating with the one you used with Java on second semester

Both JSP and EJS uses tags to embed Java and JavaScript respectively in HTML code

JSP tags:

-   `<%!` Variable declaration or method definition `%>`
-   `<%=` Java valid expression `%>`
-   `<%` Pure Java code `%>`

EJS tags:

-   `<%` 'Scriptlet' tag, for control-flow, no output
-   `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
-   `<%=` Outputs the value into the template (HTML escaped)
-   `<%-` Outputs the unescaped value into the template
-   `<%#` Comment tag, no execution, no output
-   `<%%` Outputs a literal '<%'
-   `%>` Plain ending tag
-   `-%>` Trim-mode ('newline slurp') tag, trims following newline
-   `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it

## Demonstrate a simple Server Side Rendering example using a technology of your own choice (pug, EJS, ..)

Setting up route

```js
var express = require("express");
var router = express.Router();
router.get("/joke", function(req, res, next) {
	let counter = req.session.jokeCounter;
	counter++;
	req.session.jokeCounter = counter;
	res.render("randomJoke", { title: "Joke", joke: jokes.getRandomJoke() });
});
```

Rendering the site

```js
<!DOCTYPE html>
<html>
    <head>
        <title><%= title %></title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    <body>
        <a href='/'>Home Page</a>
        <p><%= joke %></p>
    </body>
</html>
```

## Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using, for example, the Request package

Implementing a REST-API with Express

```js
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
```

Testing the REST-API

```js
const expect = require("chai").expect;
const http = require('http');
const app = require('../app');
const fetch = require("node-fetch");
const TEST_PORT = 3344;
const URL = `http://localhost:${TEST_PORT}/api`;
const jokes = require("../model/jokes");
let server;
describe("Verify the Joke API", function() {
    before(function(done){
        server = http.createServer(app);
        server.listen(TEST_PORT,()=>{
            console.log("Server Started")
            done()
        })
    })
    after(function(done){
        server.close();
        done();
    })
    beforeEach(function(){
        jokes.setJokes(["aaa","bbb","ccc"])
    })
    it("Should add the joke 'ddd",async function(){
        var init = {
            method: "POST",
            headers : {"content-type": "application/json"},
            body : JSON.stringify({joke: "ddd"})
        }
        await fetch(URL+"/addjoke",init).then(r => r.json());
        //Verify result
        expect(jokes.getAllJokes()).lengthOf(4);
        expect(jokes.getAllJokes()).to.include("ddd")
    })
}
```

## Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code

We can test our code with Mocha, and we can make the asserts more readable with Chai's expect

```js
const expect = require("chai").expect;
const calc = require("../calc");
describe("Calculator API", function() {
	describe("Testing the basic Calc API", function() {
		it("4 + 3 should return 7", function() {
			const res = calc.add(4, 3);
			expect(res).to.be.equal(7);
		});
		it("4 - 3 should return 1", function() {
			const res = calc.subtract(4, 3);
			expect(res).to.be.equal(1);
		});
		it("4 * 3 should return 12", function() {
			const res = calc.muliply(4, 3);
			expect(res).to.be.equal(12);
		});
		it("9 / 3 should return 7", function() {
			const res = calc.divide(9, 3);
			expect(res).to.be.equal(3);
		});
		it("4 / 0 should throw error", function() {
			expect(() => calc.divide(4, 0)).to.throw(/Attempt to divide by zero/);
		});
	});
});
```

Testing asynchronous code

```js
const expect = require("chai").expect;
const calc = require("../calc");
const fetch = require("node-fetch");
const PORT = 2345;
const URL = `http://localhost:${PORT}/api/calc/`;
let server;
describe("Testing the REST Calc API", function() {
	before(function(done) {
		calc.calcServer(PORT, function(s) {
			server = s;
			done();
		});
	});
	//testing asynchronous code
	it("4 + 3 should return 7", async function() {
		const res = await fetch(URL + "add/4/3").then(r => r.text());
		expect(res).to.be.equal("7");
	});
	after(function() {
		server.close();
	});
});
```

## Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.

We can use `nock` to mock a website

```js
const nock = require("nock");
describe("loadWiki()", function() {
	before(function() {
		//the website to be mocked
		nock("https://en.wikipedia.org")
			//the HTTP method and the path
			.get("/wiki/Abraham_Lincoln")
			//the response the mocked website should send
			.reply(200, "Mock Abraham Lincoln Page");
	});
	it("Load Abraham Lincoln's wikipedia page", function(done) {
		tools.loadWiki({ first: "Abraham", last: "Lincoln" }, function(html) {
			expect(html).to.equal("Mock Abraham Lincoln Page");
			done();
		});
	});
});
```

## Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed

I would use nginx, i would disable `console.log` statements, and i would add logging

# NoSQL, MongoDB and Mongoose

## Explain, generally, what is meant by a NoSQL database

NoSQL encompasses a wide variety of different database technologies but generally all NoSQL databases have a few features in common.

### Dynamic schemas

NoSQL databases are built to allow the insertion of data without a predefined schema. That makes it easy to make significant application changes in real-time, without worrying about service interruptions – which means development is faster, code integration is more reliable, and less database administrator time is needed.

### Auto-sharding, replication and integrated caching

"Sharding" a database across many server instances can be achieved with SQL databases, but usually is accomplished through SANs and other complex arrangements for making hardware act as a single server. NoSQL databases, on the other hand, usually support auto-sharding, meaning that they natively and automatically spread data across an arbitrary number of servers, without requiring the application to even be aware of the composition of the server pool. Data and query load are automatically balanced across servers, and when a server goes down, it can be quickly and transparently replaced with no application disruption.

Most NoSQL databases also support automatic replication, meaning that you get high availability and disaster recovery without involving separate applications to manage these tasks. The storage environment is essentially virtualized from the developer's perspective.

Lastly, many NoSQL database technologies have excellent integrated caching capabilities, keeping frequently-used data in system memory as much as possible. This removes the need for a separate caching layer that must be maintained.

## Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL

![MySQL & MongoDB pros & cons](https://cdn-images-1.medium.com/max/1600/1*1L4mHDCAfp1IUNePvuT07g.png)

It is very fast to read data as you often avoid have to join tables. But it can also be slower to update because of the database is denormalized.

## Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB

Since MongoDB on its own is schemaless, which can cause some troubles, using a layer on top like mongoose makes it possible also to reference documents in other collections inside a document.

## These two topics will be introduced in period-3

### Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them

Waiting for flow3 to answer this...

### Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere

Waiting for flow3 to answer this...

## Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB

```js
const User = require("../models/user");

async function addUser(user) {
	return await User.create(user);
}

async function addJobToUser(userId, job) {
	return await User.findByIdAndUpdate(
		userId,
		{
			$push: {
				job
			}
		},
		{ new: true }
	);
}

async function getAllUsers() {
	return await User.find({});
}

async function findByUserName(userName) {
	return await User.findOne({
		userName
	});
}

module.exports = {
	addUser,
	addJobToUser,
	getAllUsers,
	findByUserName
};
```

## Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations

Explained earlier

## Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization

rule 1 Favor embedding unless there is a compelling reason not to.

rule 2 Needing to access an object on its own is a compelling reason not to embed it.

rule 3 Arrays should not grow without bound. If there are more than a couple of hundred documents on the “many” side, don’t embed them; if there are more than a few thousand documents on the “many” side, don’t use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed.

rule 4 Don’t be afraid of application-level joins: if you index correctly and use the projection specifier (as shown in part 2) then application-level joins are barely more expensive than server-side joins in a relational database.

rule 5 Consider the write/read ratio when denormalizing. A field that will mostly be read and only seldom updated is a good candidate for denormalization: if you denormalize a field that is updated frequently then the extra work of finding and updating all the instances is likely to overwhelm the savings that you get from denormalizing.

rule 6 As always with MongoDB, how you model your data depends – entirely – on your particular application’s data access patterns. You want to structure your data to match the ways that your application queries and updates it.

reference [6 Rules of Thumb](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3)

## Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let JobSchema = new Schema({
	type: String,
	company: String,
	companyUrl: String
});

let UserSchema = new Schema({
	firstName: String,
	lastName: String,
	userName: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	job: [JobSchema],
	created: {
		type: Date,
		default: Date.now
	},
	lastUpdated: Date
});
```

a user have a one-to-few job. therefore we have embedded the job data into user

## Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)

Explained earlier

the testing of the database could look like this:

```js
const assert = require("assert");
const blogFacade = require("../facade/blogFacade");
const LocationBlog = require("../models/LocationBlog");
const User = require("../models/User");

const connect = require("../dbConnect");
connect(require("../settings").TEST_DB_URI);

describe("LocationBlogFacade", function() {
	var testUser1;
	var testBlog1;

	beforeEach(async function() {
		testUser1 = new User({
			firstName: "Jenne",
			lastName: "Teste",
			userName: "jenn",
			password: "1234",
			email: "jenn@"
		});
		await testUser1.save();

		testBlog1 = new LocationBlog({
			info: "Very Nice blog i wrote here",
			pos: { longitude: 22, latitude: 23 },
			author: testUser1
		});
		await testBlog1.save();
	});

	afterEach(async function() {
		await User.deleteMany({});
		await LocationBlog.deleteMany({});
	});

	it("should should add the locationblog", async function() {
		const blog = await blogFacade.addLocationBlog(
			"Nice blog i wrote here",
			{ longitude: 24, latitude: 23 },
			testUser1
		);
		assert.equal(blog.author, testUser1);
	});

	it("should add the user to the liked list", async function() {
		const blog = await blogFacade.likeLocationBlog(testBlog1, testUser1);
		assert.ok(blog.likedBy[0].equals(testUser1));
	});

	it("should not be able to have the same user to like twice", async function() {
		const blog = await blogFacade.likeLocationBlog(testBlog1, testUser1);
		await blogFacade.likeLocationBlog(blog, testUser1);
		assert.equal(blog.likedByCount, 1);
	});
});
```

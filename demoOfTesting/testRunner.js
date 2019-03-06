const calc = require("./calc");
const PORT = 666;

calc.calcServer(PORT, () => console.log("Server started"));

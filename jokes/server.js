const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const AllJokeRoutes = require("./server/routes/jokes.routes");

AllJokeRoutes(app);

app.listen(8000, () => console.log("The server is runnin clean on 8000"));
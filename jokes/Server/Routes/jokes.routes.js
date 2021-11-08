const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.post("/api/jokes/create", JokeController.createJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}
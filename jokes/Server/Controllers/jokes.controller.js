const Joke = require("../models/jokes.model")

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJokeCreation => res.json({joke: newJokeCreation}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};
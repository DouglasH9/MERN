const {Athlete} = require("../models/athlete.model");

module.exports.allAthletes = (req,res) => {
    Athlete.find({})
        .then(athletes => {
            res.json(athletes)
        })
        .catch(err => {
            res.status(400).json(err);
        })
} 

module.exports.createAthlete = (req, res) => {
    const {fName, lName, sport, team} = req.body;
    Athlete.create({
        fName,
        lName,
        sport,
        team
    })
        .then(athlete => {
            res.json(athlete)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports.grabOneAthlete = (req,res) => {
    Athlete.findOne({
        _id: req.params.id
    })
        .then(athlete => res.json(athlete))
        .catch(err => res.json(err))
}

module.exports.updateAthlete = (req,res) => {
    // const {fName, lName, sport, team} = req.body;
    Athlete.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAthlete => res.json(updatedAthlete))
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports.deleteAthlete = (req, res) => {
    Athlete.deleteOne({_id: req.params.id})
        .then(athlete => res.json(athlete))
        .catch(err => res.json(err))
}
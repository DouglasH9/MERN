const mongoose = require("mongoose");

const AthleteSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, "First name is required"]
    },
    lName: {
        type: String,
        required: [true, "Last name is required"]
    },
    sport: {
        type: String, 
        required: [true, "Sport is required"]
    },
    team: {
        type: String,
        required: [true, "Team is required"]
    }
}, {timestamps: true})

module.exports.Athlete = mongoose.model("Athlete", AthleteSchema);

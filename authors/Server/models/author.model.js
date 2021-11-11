const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [
            true,
            "First name is required"
        ],
        minLength: 
        [2, "First name length must be at least 2 characters in length"]
    },
    lastName : {
        type: String,
        required: [
            true,
            "Last name is required"
        ],
        minLength: 
        [2, "Last name must be at least 2 characters in length"]
    }
}, {timestamps: true});

module.exports.Author = mongoose.model("Author", AuthorSchema);
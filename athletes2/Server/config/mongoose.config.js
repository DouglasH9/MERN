const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/athletes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => {
        console.log("Connected to the Database")
    })
    .catch( () => {
        console.log("Error connecting to the database")
    })

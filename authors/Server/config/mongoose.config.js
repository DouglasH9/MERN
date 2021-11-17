const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authorsDB", {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
})
    .then(()=> console.log("Established a connection to the database"))
    .catch(err=> console.log("Something went wrong when connecting to the database", err));
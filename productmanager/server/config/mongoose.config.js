const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productmanagerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Connected to the database"))
    .catch(err=> console.log("Something is amiss", err));


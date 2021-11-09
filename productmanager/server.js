const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("./server/config/mongoose.config");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("./server/routes/products.routes")(app);
app.listen(8000, ()=>{
    console.log("Peepin and creepin at Port 8000")
})
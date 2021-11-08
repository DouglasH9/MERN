const ProductsController = require("../controllers/products.controller");

module.exports = function(app){
    app.get("/api", ProductsController.index);
    app.post("/api/product/create", ProductsController.createProduct);
    app.get("/api/products", ProductsController.getAllProducts);
    app.get("/api/product/:id", ProductsController.getOneProduct);
}

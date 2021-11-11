const AuthorController = require("../controllers/authors.controller");


module.exports = function(app){
    app.get("/api", AuthorController.index);
    app.post("/api/create", AuthorController.createAuthor);
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.get("/api/author/:id", AuthorController.getOneAuthor);
    app.put("/api/author/:id/edit", AuthorController.updateAuthor);
    app.delete("/api/author/:id", AuthorController.deleteAuthor);
}
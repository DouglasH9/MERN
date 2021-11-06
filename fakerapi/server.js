// import Express from "express";
// import fakerStatic from "faker";
const express = require("express");
const app = express();
const faker = require("faker");
const port = 8000;
// app.use( express.json() );
// app.use( express.urlencoded({extended: true}));

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName(),
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.country()
        };
        
    }
}

const guy = new User();
const newComp = new Company();

app.get("/api/users/new", (req, res) => {
    res.json({guy})
})

app.get("/api/companies/new", (req,res) => {
    res.json({newComp});
})

app.get("/api/user/company", (req, res) => {
    res.json({guy, newComp});
})


app.listen( port, () => console.log(`Listening on port: ${port} `))
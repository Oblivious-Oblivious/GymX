const variable = "express";
const express = require(variable);

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});

app.listen(8888);
console.log("Listening on port localhost:8888...");
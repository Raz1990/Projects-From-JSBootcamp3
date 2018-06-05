const express = require("express");

const app = express();

app.get("/api/echo/hello", function (req, res) {
    res.json("hello");
});

app.listen(4000, function() {
    console.log("Server is running")
    ;}
);

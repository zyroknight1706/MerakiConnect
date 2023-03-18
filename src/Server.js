const express = require("express");

const App = express();

App.get("/", (request, response) => {
    console.log(request);
});

App.listen(3000, () => {
    console.log("server at port 3000");
});
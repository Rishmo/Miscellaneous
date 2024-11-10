const express = require("express");
const app = express();
const port = 8080;

// for handling POST request

app.use(express.urlencoded({extended:true}));

app.get("/register", (req, res) => {
    let {username, pass} = req.query;
    res.send(`Standard GET response, Welcome ${username}!`);
});

app.post("/register", (req, res) => {
    let {username, pass} = req.body;
    res.send(`Standard GET response, Welcome ${username}!`);
});

app.listen(port, () =>{
    console.log(`listening to port &{port}`);
});
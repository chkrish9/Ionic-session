const express = require('express');

const app = express();

//Port numb
var port = process.env.PORT || 3000;

//Required for navigating angular routes without server routes
app.get('/', (req, res) => {
    res.json("Welcome to node js");
});

  
//Start server
app.listen(port, () => {
    console.log("Server running in :" + port);
});
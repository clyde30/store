const express = require('express');

const app = express();

app.use(express.static(__dirname + '/app'));

app.listen(8080, function() {
    console.log("Listening on 8080")
});

app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/views/pages/index.html');
    res.sendFile(__dirname + '/app/index.html');
});
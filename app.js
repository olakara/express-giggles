var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log('Running on PORT: ', port);
})

app.get('/', (req, res) => {
    res.send('Welcome to my API');
})
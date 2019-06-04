const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', (req, res) =>{
    let thing = req.params.thing;
    res.render('love.ejs', {thing});
});
//404 not found, last get
app.get('*', (req, res) => {
    res.render('404.ejs');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
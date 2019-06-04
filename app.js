const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/posts/', (req, res) => {
    const posts = [
        {title: 'Death List', author: 'Arya'},
        {title: 'Queen of the North', author: 'Sansa'},
        {title: 'How to warg for no reason', author: 'Bran'}
    ];
    res.render('posts.ejs', {posts});
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
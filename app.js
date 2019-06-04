const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/posts/', (req, res) => {
    const posts = [
        {title: 'Death List', author: 'Arya'},
        {title: 'Queen of the North', author: 'Sansa'},
        {title: 'How to warg for no reason', author: 'Bran'}
    ];
    res.render('posts', {posts});
});

app.get('/enemies', (req, res) => {
    const enemies = ['The Hound', 'The Mountain'];
    res.render('enemies', {enemies: enemies})
}); 

app.get('/fallinlovewith/:thing', (req, res) =>{
    let thing = req.params.thing;
    res.render('love', {thing});
});

//404 not found, last get
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
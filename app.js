const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const enemies = ['The Hound', 'The Mountain'];

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/addenemy', (req, res) => {
    const newEnemy = req.body.newenemy;
    enemies.push(newEnemy);
    res.redirect('/enemies');
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
    res.render('enemies', {enemies: enemies});
});

app.get('/fallinlovewith/:thing', (req, res) =>{
    let thing = req.params.thing;
    res.render('love', {thing});
});

//remains last
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
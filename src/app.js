const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const Card = require('./models/card');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser())

app.locals.siteName = "Flash Cards";

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const username = req.cookies.username;
    if(!username) res.redirect('/hello');
    res.render("index",{username});
});

app.get('/cards', (req, res) => {
    const card = new Card(
        "this holds the prompt data from my class",
    );
    res.render("card", {card});
});

app.get('/hello', (req, res) => {
    const username = req.cookies.username;
    if(username) res.redirect('/');
    res.render('hello');
});

app.post('/hello', (req, res) => {
    //res.json(req.body);
    res.cookie('username',req.body.username)
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username')
    res.redirect('/hello');
});

app.listen(3000, () => {
   console.log('The application is running on localhost:3000!')
});



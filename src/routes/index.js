const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const username = req.cookies.username;
    if(!username) res.redirect('/hello');
    res.render("index",{username});
});

router.get('/hello', (req, res) => {
    const username = req.cookies.username;
    if(username) res.redirect('/');
    res.render('hello');
});

router.post('/hello', (req, res) => {
    //res.json(req.body);
    const username = req.body.username
    res.cookie('username',username)
    res.redirect('/');
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username')
    res.redirect('/hello');
});

module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const Card = require('../models/card');
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
   const cardId =  Math.floor(Math.random() * Math.floor(cards.length));
   res.redirect(`cards/${cardId}`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const { question } = cards[id];
    const { hint } = cards[id];
    const { answer } = cards[id];
    const { username } = req.cookies;

    if( !side ) return res.redirect(`/cards/${id}?side=question`)

    const someCard = new Card(id,question, hint, answer);

    res.render("card", {card: someCard, side, username});
});

module.exports = router;
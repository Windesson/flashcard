class Card {
    constructor(phrase, hint) {
        this.prompt = phrase;
        this.hint = hint;
    }

    getColor() {
        return  [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple'
          ];
    }
}

module.exports = Card;
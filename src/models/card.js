class Card {
    constructor(id, phrase, hint, answer) {
        this.id = id;
        this.question = phrase;
        this.hint = hint;
        this.answer = answer;
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
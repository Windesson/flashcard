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

    getText(sideToShow){
        return sideToShow.toLowerCase() === 'answer'? this.answer : this.question;
    }

    getFlip(currentSide){
        return currentSide.toLowerCase() === 'answer'? "question" : "answer";
    }
}

module.exports = Card;
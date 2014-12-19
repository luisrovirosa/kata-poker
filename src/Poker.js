var Hand = require('./Hand.js');
var Rules = require('./PokerRules.js');

function Poker() {
    this.BLACK = 1;
    this.WHITE = 7;
    this.rules = new Rules();
}

Poker.prototype.play = function (line) {
    var blackHand = Hand.create(getCards(this.BLACK, line));
    var whiteHand = Hand.create(getCards(this.WHITE, line));

    return this.getWinner(blackHand, whiteHand);
};

function getCards(color, line) {
    var cards = line.split(' ');
    return cards.slice(color, color + 5).join(' ');
}

Poker.prototype.getWinner = function (blackHand, whiteHand) {
    var result = this.rules.resolve(blackHand, whiteHand);
    return result.getMessage();
};

module.exports = Poker;

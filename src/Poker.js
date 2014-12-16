var Hand = require('../src/Hand.js');

function Poker() {
    this.BLACK = 1;
    this.WHITE = 7;
}

Poker.prototype.play = function (line) {
    var blackHand = Hand.create(getCards(this.BLACK, line));
    var whiteHand = Hand.create(getCards(this.WHITE, line));

   return getWinner(blackHand, whiteHand);
};

function getCards(color, line) {
    var cards = line.split(' ');
    return cards.slice(color, color + 5).join(' ');
}

function getWinner(blackHand, whiteHand){
    var result = blackHand.compareTo(whiteHand);
    if (result < 0) {
        return "White wins.";
    } else if (result > 0) {
        return "Black wins.";
    }
    return "";
}

module.exports = Poker;

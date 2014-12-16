var Hand = require('../src/Hand.js');

function Poker() {
    this.BLACK = 1;
    this.WHITE = 7;
}

function getHand(color, line) {
    var cards = line.split(' ');
    return Hand.create(cards.slice(color, color + 5).join(' '));
}

function getWinner(blackHand, whiteHand){
    var result = blackHand.compareTo(whiteHand);
    if (result < 0) {
        return "Black wins.";
    } else if (result > 0) {
        return "White wins.";
    }
    return "";
}

Poker.prototype.play = function (line) {
    var blackHand = getHand(this.BLACK, line);
    var whiteHand = getHand(this.WHITE, line);

   return getWinner(blackHand, whiteHand);
};


module.exports = Poker;

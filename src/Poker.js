function Poker() {
    this.BLACK = 1;
    this.WHITE = 7;
}

var cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

function compareCards(a, b) {
    return cardOrder.indexOf(b[0]) - cardOrder.indexOf(a[0]);
}

function getCardsOrdered(line, color) {
    var cards = line.split(' ');
    return cards.slice(color, color + 5).sort(compareCards);
}
Poker.prototype.play = function (line) {
    var blackCards = getCardsOrdered(line, this.BLACK);
    var whiteCards = getCardsOrdered(line, this.WHITE);

    for (var i = 0; i < 5; i++) {
        var result = compareCards(blackCards[i], whiteCards[i]);
        if (result < 0) {
            return "Black wins.";
        } else if (result > 0) {
            return "White wins.";
        }
    }
};


module.exports = Poker;

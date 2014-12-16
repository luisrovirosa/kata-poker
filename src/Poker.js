function Poker() {
    this.BLACK = 1;
    this.WHITE = 7;
}

var cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

function compareCards(a, b){
    return cardOrder.indexOf(a[0]) < cardOrder.indexOf(b[0]);
}

function getCardsOrdered(line, color) {
    var cards = line.split(' ');
    return cards.slice(color, color + 5).sort(compareCards);
}
Poker.prototype.play = function(line){
    var blackCards = getCardsOrdered(line, this.BLACK);
    var whiteCards = getCardsOrdered(line, this.WHITE);

    return compareCards(blackCards[0], whiteCards[0]) ? "White wins." : "Black wins.";
};




module.exports = Poker;

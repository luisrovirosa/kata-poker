function Poker() {

}

var cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

var compareCards = function(a, b){
    return cardOrder.indexOf(a[0]) < cardOrder.indexOf(b[0]);
};

Poker.prototype.play = function(line){
    var cards = line.split(' ');
    var blackCards = cards.slice(1,6).sort(compareCards);
    var whiteCards = cards.slice(7,14).sort(compareCards);

    return compareCards(blackCards[0], whiteCards[0]) ? "White wins." : "Black wins.";
};




module.exports = Poker;

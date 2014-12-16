function Hand(){
    this.cards = [];
}


Hand.create = function(handString){
    var hand = new Hand();
    hand.cards = handString.split(' ').sort(compareCards);
    return hand;
};

Hand.prototype.compareTo = function(otherHand){
    for (var i = 0; i < 5; i++) {
        var result = compareCards(this.cards[i], otherHand.cards[i]);
        if (result != 0){
            return result;
        }
    }
};

function compareCards(a, b) {
    var cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    return cardOrder.indexOf(b[0]) - cardOrder.indexOf(a[0]);
}
module.exports = Hand;

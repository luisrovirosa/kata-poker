var Card = require('../src/Card.js');

function Hand(){
    this.cards = [];
}

Hand.create = function(handString){
    var hand = new Hand();
    hand.cards = handString.split(' ').map(function(cardString){
        return Card.create(cardString);
    }).sort(Card.sortDesc);
    return hand;
};

Hand.prototype.compareTo = function(otherHand){
    // Count the number of cards
    var numberOfCards = calculateNumberOfCards(this.cards);
    var numberOfCardsOtherHand = calculateNumberOfCards(otherHand.cards);
    var i;
    for (i=0; i < 5; i++){
        if (numberOfCards[i]['v'] != numberOfCardsOtherHand[i]['v']){
            return numberOfCards[i]['k'] - numberOfCardsOtherHand[i]['k'];
        }
    }
    var result = 0;
    i = 0;
    do {
        result = this.cards[i].compareTo(otherHand.cards[i]);
    } while (result == 0 && ++i < 5);
    return result;
};

function calculateNumberOfCards(cards){
    var numberOfCards = {};
    cards.forEach(function(card){
        numberOfCards[card.getValue()] = numberOfCards[card.getValue()] ? numberOfCards[card.getValue()] + 1: 1;
    });
    var sortDescByNumberOfCards = function(a, b) {
        return -(numberOfCards[a]-numberOfCards[b]);
    };
    numberOfCards = Object.keys(numberOfCards).sort(sortDescByNumberOfCards).map(function(k){
        return {k: k, v:numberOfCards[k]};
    });
    //console.log(numberOfCards);
    return numberOfCards;
}


module.exports = Hand;

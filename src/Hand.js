var Card = require('./Card.js');
var CompareValues = require('./rules/CardValues.js');

function Hand() {
    this.cards = [];
    this.cardsByGroups = [];
    this.cardValues = new CompareValues();
    this.groupCards = function () {
        var numberOfCards = groupCardsByValue.call(this);
        numberOfCards = sortNumberOfCards.call(this, numberOfCards);
        return numberOfCards;
    }
}
Hand.create = function (handString) {
    var hand = new Hand();
    hand.cards = createCards(handString);

    hand.cardsByGroups = hand.groupCards();
    return hand;
};

Hand.prototype.getNumberOfGroups = function () {
    return this.cardsByGroups.length;
};

Hand.prototype.getNumberOfCardFromGroup = function (num) {
    return this.cardsByGroups[num].v;
};

Hand.prototype.getValueFromGroup = function (num) {
    return this.cardsByGroups[num].k;
};

Hand.prototype.getSuitOfCard = function (num) {
    return this.cards[num].getSuit();
};

Hand.prototype.getValueOfCard = function (num) {
    return this.cards[num].getValue();
};

function sortNumberOfCards(numberOfCards) {
    var self = this;
    var sortDescByNumberOfCards = function (a, b) {
        return -(numberOfCards[a] - numberOfCards[b]) * 100 - self.cardValues.compare(a, b);
    };
    return Object.keys(numberOfCards).sort(sortDescByNumberOfCards).map(function (k) {
        return {k: k, v: numberOfCards[k]};
    });
}

function createCards(handString) {
    return handString.split(' ').map(function (cardString) {
        return Card.create(cardString);
    });
}


function groupCardsByValue() {
    var numberOfCards = {};
    this.cards.forEach(function (card) {
        numberOfCards[card.getValue()] = numberOfCards[card.getValue()] ? numberOfCards[card.getValue()] + 1 : 1;
    });
    return numberOfCards;
}


module.exports = Hand;

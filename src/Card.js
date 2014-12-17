function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

Card.create = function (cardString) {
    return new Card(cardString[0], cardString[1])
};

Card.prototype.getValue = function () {
    return this.value;
};

Card.prototype.getSuit = function () {
    return this.suit;
};

module.exports = Card;

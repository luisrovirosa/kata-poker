function Card(value, suit){
    this.value = value;
    this.suit = suit;
}

Card.create = function(cardString){
    return new Card(cardString[0], cardString[1])
};

Card.sortDesc = function(a, b){
    return -a.compareTo(b);
};

var cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

Card.prototype.compareTo = function(otherCard){
    return cardOrder.indexOf(this.value) - cardOrder.indexOf(otherCard.value);
};

module.exports = Card;

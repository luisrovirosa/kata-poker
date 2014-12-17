function CompareValues(){

}

var cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
var compareCards = function(a, b){
    return cardOrder.indexOf(a) - cardOrder.indexOf(b);
};

CompareValues.prototype.compare = function(card, anotherCard){
    return compareCards(card, anotherCard);
};

module.exports = CompareValues;


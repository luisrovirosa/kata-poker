var BaseRule = require('./BaseRule.js');

function StraightFlush(){
}
StraightFlush.prototype = new BaseRule();

StraightFlush.prototype.belongs = function(hand){
    var cards = hand.getCards();
    for (var i = 0; i < 4; i++){
        if (cards[i].getSuit() != cards[i+1].getSuit() || (1 != this.compareValues.compare(hand.getCardGroup(i).k, hand.getCardGroup(i+1).k))){
            return false;
        }
    }
    return true;
};

module.exports = StraightFlush;

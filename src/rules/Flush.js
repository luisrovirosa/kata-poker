var BaseRule = require('./BaseRule.js');

function Flush(){
}
Flush.prototype = new BaseRule();

Flush.prototype.belongs = function(hand){
    var cards = hand.getCards();
    for (var i = 0; i < 4; i++){
        if (cards[i].getSuit() != cards[i+1].getSuit()){
            return false;
        }
    }
    return true;
};

module.exports = Flush;

var BaseRule = require('./BaseRule.js');

function Straight(){
}
Straight.prototype = new BaseRule();

Straight.prototype.belongs = function(hand){
    for (var i = 0; i < 4; i++){
        if (1 != this.compareValues.compare(hand.getCardGroup(i).k, hand.getCardGroup(i+1).k)){
            return false;
        }
    }
    return true;
};

module.exports = Straight;

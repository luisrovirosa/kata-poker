var BaseRule = require('./BaseRule.js');

function Pair(){
}
Pair.prototype = new BaseRule();

Pair.prototype.belongs = function(hand){
    return hand.getCardGroup(0).v == 2;
};

Pair.prototype.until = function(){
    return 1;
};

module.exports = Pair;

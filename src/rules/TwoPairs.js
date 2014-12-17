var BaseRule = require('./BaseRule.js');

function TwoPairs(){

}
TwoPairs.prototype = new BaseRule();

TwoPairs.prototype.belongs = function(hand){
    return hand.getCardGroup(0).v == 2
        && hand.getCardGroup(1).v == 2;
};

TwoPairs.prototype.until = function(){
    return 2;
};


module.exports = TwoPairs;

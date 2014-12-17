var BaseRule = require('./BaseRule.js');

function FourOfAKind(){
}
FourOfAKind.prototype = new BaseRule();


FourOfAKind.prototype.belongs= function (hand){
    return hand.getCardGroup(0).v == 4;
};

module.exports = FourOfAKind;

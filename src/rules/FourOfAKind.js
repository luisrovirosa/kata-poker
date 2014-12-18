var BaseRule = require('./BaseRule.js');

function FourOfAKind() {
}
FourOfAKind.prototype = new BaseRule();


FourOfAKind.prototype.belongs = function (hand) {
    return hand.getCardGroup(0).v == 4;
};

FourOfAKind.prototype.name = function(){
    return 'four of a kind';
};

module.exports = FourOfAKind;

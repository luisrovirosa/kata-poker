var BaseRule = require('./BaseRule.js');

function ThreeOfAKind() {
}
ThreeOfAKind.prototype = new BaseRule();


ThreeOfAKind.prototype.belongs = function (hand) {
    return hand.getCardGroup(0).v == 3;
};

ThreeOfAKind.prototype.name = function(){
    return 'three of a kind';
};

module.exports = ThreeOfAKind;

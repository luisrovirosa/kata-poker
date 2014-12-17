var BaseRule = require('./BaseRule.js');

function ThreeOfAKind(){
}
ThreeOfAKind.prototype = new BaseRule();


ThreeOfAKind.prototype.belongs= function (hand){
    return hand.getCardGroup(0).v == 3;
};

ThreeOfAKind.prototype.until = function(){
    return 1;
};


module.exports = ThreeOfAKind;

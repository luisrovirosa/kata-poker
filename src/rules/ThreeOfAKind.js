var BaseRule = require('./BaseRule.js');

function ThreeOfAKind(){
}
ThreeOfAKind.prototype = new BaseRule();


ThreeOfAKind.prototype.belongs= function (numberOfCards){
    return numberOfCards[0]['v'] == 3;
};

ThreeOfAKind.prototype.until = function(){
    return 1;
};


module.exports = ThreeOfAKind;

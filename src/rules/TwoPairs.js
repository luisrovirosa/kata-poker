var BaseRule = require('./BaseRule.js');

function TwoPairs() {

}
TwoPairs.prototype = new BaseRule();

TwoPairs.prototype.belongs = function (hand) {
    return hand.getNumberOfCardFromGroup(0) == 2
        && hand.getNumberOfCardFromGroup(1) == 2;
};

TwoPairs.prototype.until = function () {
    return 2;
};

TwoPairs.prototype.name = function(){
    return 'two pairs';
};

module.exports = TwoPairs;

var BaseRule = require('./BaseRule.js');

function HighCard() {

}
HighCard.prototype = new BaseRule();

HighCard.prototype.belongs = function (hand) {
    return true;
};

HighCard.prototype.until = function () {
    return 999;
};

HighCard.prototype.name = function () {
    return 'high card'
};

module.exports = HighCard;

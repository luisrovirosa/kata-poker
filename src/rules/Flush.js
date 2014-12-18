var BaseRule = require('./BaseRule.js');

function Flush() {
}
Flush.prototype = new BaseRule();

Flush.prototype.belongs = function (hand) {
    for (var i = 0; i < 4; i++) {
        if (hand.getSuitOfCard(i) != hand.getSuitOfCard(i + 1)) {
            return false;
        }
    }
    return true;
};

Flush.prototype.name = function(){
    return 'flush';
};

module.exports = Flush;

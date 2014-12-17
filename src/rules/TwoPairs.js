var BaseRule = require('./BaseRule.js');

function TwoPairs(){

}
TwoPairs.prototype = new BaseRule();



TwoPairs.prototype.belongs = function(numberOfCards){
    return numberOfCards[0]['v'] == 2 && numberOfCards[1]['v'] == 2;
};

TwoPairs.prototype.until = function(){
    return 2;
};


module.exports = TwoPairs;

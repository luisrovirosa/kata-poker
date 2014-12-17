var BaseRule = require('./BaseRule.js');

function Straight(){
}
Straight.prototype = new BaseRule();

Straight.prototype.belongs = function(numberOfCards){
    for (var i = 0; i < 4; i++){
        if (1 != this.compareValues.compare(numberOfCards[i]['k'], numberOfCards[i+1]['k'])){
            return false;
        }
    }
    return true;
};

Straight.prototype.until = function(){
    return 1;
};

module.exports = Straight;

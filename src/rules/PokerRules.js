var RuleThreeOfAKind = require('./ThreeOfAKind.js');
var RuleTwoPairs = require('./TwoPairs.js');
var RulePair = require('./Pair.js');
var HighCard = require('./HighCard.js');

function PokerRules(){
    this.rules = [new RuleThreeOfAKind(), new RuleTwoPairs(), new RuleTwoPairs(), new RulePair(), new HighCard()];
}


PokerRules.prototype.compare = function(hand, otherHand){
    for (var i=0; this.rules.length; i++){
        var rule = this.rules[i];
        var result = rule.compare(hand, otherHand);
        if (result){
            return result;
        }
    }
};

module.exports = PokerRules;

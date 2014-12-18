var StraightFlush = require('./rules/StraightFlush.js');
var FourOfAKind = require('./rules/FourOfAKind.js');
var FullHouse = require('./rules/FullHouse.js');
var Flush = require('./rules/Flush.js');
var Straight = require('./rules/Straight.js');
var RuleThreeOfAKind = require('./rules/ThreeOfAKind.js');
var RuleTwoPairs = require('./rules/TwoPairs.js');
var RulePair = require('./rules/Pair.js');
var HighCard = require('./rules/HighCard.js');
var Result = require('./Result.js');


function PokerRules() {
    this.rules = [
        new StraightFlush(),
        new FourOfAKind(),
        new FullHouse(),
        new Flush(),
        new Straight(),
        new RuleThreeOfAKind(),
        new RuleTwoPairs(),
        new RuleTwoPairs(),
        new RulePair(),
        new HighCard()
    ];
}

PokerRules.prototype.compare = function (hand, otherHand) {
    for (var i = 0; i < this.rules.length; i++) {
        var rule = this.rules[i];
        var result = rule.compare(hand, otherHand);
        //console.log(result);
        if (result) {
            return result;
        }
    }
    return new Result();
};

module.exports = PokerRules;

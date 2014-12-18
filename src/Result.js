var Card = require('./Card.js');

function Result(rule, winner, winningCard) {
    this.rule = rule;
    this.winner = winner;
    this.winningCard = winningCard ? ': ' + Card.getName(winningCard) : '';
}

Result.prototype.getMessage = function () {
    if (!this.winner) {
        return 'Tie.';
    }
    return this.winner + ' wins. - with ' + this.rule.name() + this.winningCard;
};

module.exports = Result;

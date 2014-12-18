function Result(rule, winner) {
    this.rule = rule;
    this.winner = winner;
}

Result.prototype.getMessage = function () {
    if (!this.winner) {
        return 'Tie.';
    }
    return this.winner + ' wins. - with ' + this.rule.name();
};

module.exports = Result;

var Poker = require('../src/Poker.js');

describe("Poker", function(){
    var poker;
    beforeEach(function(){
       poker = new Poker();
    });

    var BLACK_WINS = 'Black wins.';
    var WHITE_WINS = 'White wins.';

    describe("Win with high card", function(){
        describe("says which color wins", function () {
            describe("when there is no same value on the highest card", function() {
                it("As is higher than King", function () {
                    var result = poker.play('Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH');
                    expect(result).toContain(WHITE_WINS);
                });
                it("King is higher than Queen", function () {
                    var result = poker.play('Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C QH');
                    expect(result).toContain(BLACK_WINS);
                });
                it("Queen is higher than Jack", function () {
                    var result = poker.play('Black: 2H 3D 5S 9C JD White: 2C 3H 4S 8C QH');
                    expect(result).toContain(WHITE_WINS);
                });
                it("Jack is higher than 10", function () {
                    var result = poker.play('Black: 2H 3D 5S 9C JD White: 2C 3H 4S 8C TH');
                    expect(result).toContain(BLACK_WINS);
                });
                it("10 is higher than 9", function () {
                    var result = poker.play('Black: 2H 3D 5S 8C 9D White: 2C 3H 4S 8C TH');
                    expect(result).toContain(WHITE_WINS);
                });
            });
            describe("when there is same value on some highest cards", function(){
                it("Only the last value has the same value", function(){
                    var result = poker.play('Black: 2H 3D 5S 7C 9D White: 2C 3H 4S 8C 9H');
                    expect(result).toContain(WHITE_WINS);
                });
                it("Only the smaller value is different", function(){
                    var result = poker.play('Black: 3H 4D 5S 7C 9D White: 2C 4H 5S 7C 9H');
                    expect(result).toContain(BLACK_WINS);
                });
            });
            describe("when the cards are not ordered", function(){
                it("Receive the same result", function(){
                    var result = poker.play('Black: 2H 9D 3D 7C 5S White: 3H 9H 4S 8C 2C');
                    expect(result).toContain(WHITE_WINS);
                });
            });
        });

        xit("final test", function(){
            var result = poker.play('Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH');
            expect(result).toBe('White wins. - with high card: Ace');
        });
    });
});

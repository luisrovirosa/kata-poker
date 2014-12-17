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

    describe("Pair wins a High card", function(){
        it("Pair of 2 is higher than no pair with Ace", function(){
            var result = poker.play('Black: 2H 3D 3D 4C 5S White: AH KH QS JC 9C');
            expect(result).toContain(BLACK_WINS);
        });

        it("Pair of 7 is higher than pair of 6", function(){
            var result = poker.play('Black: 2H 6D 6D AC 5S White: 3H 7H 7S 8C 2C');
            expect(result).toContain(WHITE_WINS);
        });

        it("Pair of A is higher than pair of T", function(){
            var result = poker.play('Black: 9H AD AD 7C 5S White: 8H TH TS 7C 6C');
            expect(result).toContain(BLACK_WINS);
        });
        it("Pair of K is higher than pair of J", function(){
            var result = poker.play('Black: 2H JD JD 7C 5S White: 3H KH KS 8C 2C');
            expect(result).toContain(WHITE_WINS);
        });
        it("Pair of T is higher than pair of 9", function(){
            var result = poker.play('Black: 2H 9D 9D 7C 5S White: 3H TH TS 8C 2C');
            expect(result).toContain(WHITE_WINS);
        });
        it("Pair of T is higher than pair of 9", function(){
            var result = poker.play('Black: 2H 9D 9D 7C 5S White: 3H TH TS 8C 2C');
            expect(result).toContain(WHITE_WINS);
        });
    });
});

var Poker = require('../src/Poker.js');

describe("Poker", function(){

    describe("Win with high card", function(){

        describe("says which color wins", function(){
            it ("As is higher than King", function(){
                var poker = new Poker();
                var result = poker.play('Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH');
                expect(result).toContain('White wins.');
            });
            it("King is higher than Queen", function(){
                var poker = new Poker();
                var result = poker.play('Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C QH');
                expect(result).toContain('Black wins.');
            });
            it("Queen is higher than Jack", function(){
                var poker = new Poker();
                var result = poker.play('Black: 2H 3D 5S 9C JD White: 2C 3H 4S 8C QH');
                expect(result).toContain('White wins.');
            });
        });


        xit("final test", function(){
            var poker = new Poker();
            var result = poker.play('Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH');
            expect(result).toBe('White wins. - with high card: Ace');
        });
    });
});

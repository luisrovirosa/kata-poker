var Poker = require('../src/Poker.js');

describe("Poker", function(){
    describe("Win with high card", function(){

        it("final test", function(){
            var poker = new Poker();
            var result = poker.play('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH');
            expect(result).toBe('White wins. - with high card: Ace');
        });
    });
});

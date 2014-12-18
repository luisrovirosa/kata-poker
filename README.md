# Kata Poker
## About me

[Luis Rovirosa](https://www.linkedin.com/in/luisrovirosa)
[@luisrovirosa](https://twitter.com/luisrovirosa)

## Premises doing the kata
1. Do **TDD** only doing **functional testing** in order to be able to refactor very easily.
2. First **simple** then **smart**: Do the simplest way to pass the test, but not baby steps.
3. Refactor until every class has only 1 responsability, the S of **S**OLID.

## Environment
This kata has been developed using:

1. Javascript as a language.
2. [Jasmine](http://jasmine.github.io/) as a testing framework.
3. [Gulp](http://gulpjs.com/) as a build system and console interface.
4. [npm](https://www.npmjs.com/) as a package management.
5. [WebStorm](https://www.jetbrains.com/webstorm/) as a IDE

## Kata description
### Requirements
Compare pairs of poker hands and to indicate which, if either, has a higher rank.

[Link to original description](http://codingdojo.org/cgi-bin/index.pl?KataPokerHands) in CodingDojo.org

### Poker rules
A poker deck contains 52 cards - each card has a suit which is one of clubs, diamonds, hearts, or spades (denoted C, D, H, and S in the input data).

Each card also has a value which is one of 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace (denoted 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A). For scoring purposes, the suits are unordered while the values are ordered as given above, with 2 being the lowest and ace the highest value.

A poker hand consists of 5 cards dealt from the deck. Poker hands are ranked by the following partial order from lowest to highest.

1. High Card: Hands which do not fit any higher category are ranked by the value of their highest card. If the highest cards have the same value, the hands are ranked by the next highest, and so on.
2. Pair: 2 of the 5 cards in the hand have the same value. Hands which both contain a pair are ranked by the value of the cards forming the pair. If these values are the same, the hands are ranked by the values of the cards not forming the pair, in decreasing order.
3. Two Pairs: The hand contains 2 different pairs. Hands which both contain 2 pairs are ranked by the value of their highest pair. Hands with the same highest pair are ranked by the value of their other pair. If these values are the same the hands are ranked by the value of the remaining card.
4. Three of a Kind: Three of the cards in the hand have the same value. Hands which both contain three of a kind are ranked by the value of the 3 cards.
5. Straight: Hand contains 5 cards with consecutive values. Hands which both contain a straight are ranked by their highest card.
6. Flush: Hand contains 5 cards of the same suit. Hands which are both flushes are ranked using the rules for High Card.
7. Full House: 3 cards of the same value, with the remaining 2 cards forming a pair. Ranked by the value of the 3 cards.
8. Four of a kind: 4 cards with the same value. Ranked by the value of the 4 cards.
9. Straight flush: 5 cards of the same suit with consecutive values. Ranked by the highest card in the hand.

### Suggested Test Cases
	Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH
	Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S
	Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH
	Black: 2H 3D 5S 9C KD  White: 2D 3H 5C 9S KH

Each row of input is a game with two players. The first five cards belong to the player named "Black" and the second five cards belong to the player named "White".

###Sample output:

	White wins. - with high card: Ace
	White wins. - with flash 
	Black wins. - with high card: 9
	Tie.


# Running the code
## Download the source
	git clone https://github.com/luisrovirosa/kata-poker.git
##Install the environment
[How to install npm](http://nodejs.org/download/)

	npm install
## Run a round
[How to install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)

	gulp play --cards <cards>
Example:

	gulp play --cards "Black: 2H 9D 3D 7C 5S White: 3H 9H 4S 8C 2C"
## Execute all the tests
	gulp jasmine

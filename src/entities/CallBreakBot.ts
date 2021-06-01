import PlayingCard from "./PlayingCard";

/** Makes a move based on:
 * The playing-cards it owns, and
 * Playing-cards on the table.
*/
export default class BotPlayer {
    constructor(public myCards: PlayingCard[]) {

    }

    possibleMoves(
        mainSuit: string | undefined = undefined,
        winningCard: PlayingCard | undefined = undefined
    ) {
        let possibleMoves: PlayingCard[] = [];
        let hasSuit = false;

        if (mainSuit === undefined) {
            possibleMoves = this.myCards;
        }
        else {
            this.myCards.forEach(myCard => {
                if (myCard.suit === mainSuit) {
                    hasSuit = true;
                    if (
                        winningCard?.suit === mainSuit &&
                        myCard.numericValue() > winningCard?.numericValue()
                    ) {
                        possibleMoves.push(myCard);
                    }
                }
            });

            if (hasSuit && possibleMoves.length === 0) {
                possibleMoves = this.myCards.filter(myCard => {
                    myCard.suit === mainSuit
                });
            }

            if (!hasSuit && possibleMoves.length === 0) {
                possibleMoves = this.myCards.filter(myCard => {
                    myCard.suit === 'spades'
                });
            }

            if (possibleMoves.length === 0) {
                possibleMoves = this.myCards;
            }
        }
    }

    makeMove(
        mainSuit: string | undefined = undefined,
        winningCard: PlayingCard | undefined = undefined
    ) {
        const possibleMoves = this.possibleMoves(mainSuit, winningCard);
    }

    strongestWinningMove() {

    }

    weakestWinningMove() {

    }

    weakestMove() {

    }

    // assume equal distribution until you know a player
    // has run out of a card

}
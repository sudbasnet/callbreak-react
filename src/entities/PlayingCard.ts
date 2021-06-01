/**Basic playing-card, has a suit, a value, and an owner.*/
class PlayingCard {
    constructor(
        public suit: string,
        public value: string,
        public owner: string = ''
    ) { }

    numericValue(): number {
        try {
            if (this.value === 'J') return 11;
            else if (this.value === 'Q') return 12;
            else if (this.value === 'K') return 13;
            else if (this.value === 'A') return 14;
            else return +this.value;
        }
        catch (err) {
            throw new Error('Card value is invalid!');
        }
    }

    static callbreakCompareCards(cardA: PlayingCard, cardB: PlayingCard) {
        if (cardA.suit === 'spades' && cardB.suit !== 'spades') {
            return cardA;
        }
        else if (cardA.suit !== 'spades' && cardB.suit === 'spades') {
            return cardB;
        }
        else if (cardA.suit !== cardB.suit) {
            return cardA;
        }
        else if (cardA.numericValue() > cardB.numericValue()) {
            return cardA;
        } else {
            return cardB;
        }
    }

}

export default PlayingCard;
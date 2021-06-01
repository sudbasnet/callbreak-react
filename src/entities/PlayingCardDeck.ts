import PlayingCard from "./PlayingCard";

interface IDealtCards {
    arrayOfDealtCards: PlayingCard[][],
    remainingCards: PlayingCard[]
}

export default class PlayingCardDeck {
    static suits = ['spades', 'hearts', 'clubs', 'diamonds'];
    static values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    public deck: PlayingCard[] = [];

    constructor() {
        PlayingCardDeck.suits.forEach(
            suit => PlayingCardDeck.values.forEach(
                value => this.deck.push(new PlayingCard(suit, value))
            )
        );
    }

    public getDealtCards(numberOfCards: number, numberOfPlayers: number): IDealtCards {
        const deck = [...this.deck];
        const dealtCards: PlayingCard[][] = [];

        let i = 0;
        while (i < numberOfPlayers) {
            dealtCards.push([]);
            i++;
        }

        let cardsDealt = 0;
        let randomPosition = 0;
        let randomCard: PlayingCard;

        while (PlayingCardDeck.length > 0 && cardsDealt < numberOfCards * numberOfPlayers) {
            randomPosition = randomLocation(deck.length);
            randomCard = deck[randomPosition];
            dealtCards[cardsDealt % numberOfPlayers].push(randomCard);
            deck.splice(randomPosition, 1); // remove 1 card from position "randomPosition"
            cardsDealt++;
        }

        const dealtCardsSorted = dealtCards.map(c => c.sort(compareCards));

        return {
            arrayOfDealtCards: dealtCardsSorted,
            remainingCards: deck
        };
    }
}


// helper functions

// returns a random location inside the deck
function randomLocation(len: number): number {
    return Math.floor(Math.random() * Math.floor(len));
}

// sort in the order: Spades, Hearts, Clubs, Diamonds
function compareCards(cardA: PlayingCard, cardB: PlayingCard) {
    if (cardA.suit === cardB.suit) {
        if (cardA.numericValue() > cardB.numericValue()) {
            return -1;
        }
        return 0;
    }
    else if (cardA.suit === 'spades') {
        return -1;
    }
    else if (cardA.suit === 'hearts' && cardB.suit !== 'spades') {
        return -1
    }
    else if (cardA.suit === 'clubs' && cardB.suit !== 'spades' && cardB.suit !== 'hearts') {
        return -1;
    }
    else {
        return 0;
    }
}
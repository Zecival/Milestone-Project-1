// All of the code for the deck and cards 
// Suits and Values uppercased to display them as a global variable in representing the card types
const SUITS = ["♠", "♣", "♥", "♦"] 
const VALUES = ["A", "2", "3", "4", "5","6", "7", "8", "9", "10", "J", "Q", "K"]
//  Able to include a full deck of cards or someone's hand of cards 
export default class Deck {
    constructor(cards =  freshDeck()) {
        this.cards = cards
    }

    shuffle() {
        this.cards.sort((a,b) => Math.random() - .5)
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}
// creates a brand new deck of cards with all 52 cards, one for each suit and value combination
// goal: loop through all the suits, loop through all the values and then combine them all together inside one array
// Flatmap function used to condense multiple arrays into one 
function freshDeck() {
      return SUITS.flatMap(suit => {
          return VALUES.map(value => {
              return new Card(suit, value)
          })
      })
}
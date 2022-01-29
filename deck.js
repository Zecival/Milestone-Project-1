// All of the code for the deck and cards 
// Suits and Values uppercased to display them as a global variable in representing the card types
const SUITS = ["♠", "♣", "♥", "♦"] 
const VALUES = ["A", "2", "3", "4", "5","6", "7", "8", "9", "10", "J", "Q", "K"]
//  Able to include a full deck of cards or someone's hand of cards 
export default class Deck {
    constructor(cards =  freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return this.cards.shift()
    }

    push(card) {
        this.cards.push(card)
    }
    
    // code block below obtains a random index, swaps the current card with a new card; looping through all cards and swapping with another card
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i --) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get color() {
        return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red'
    }

    getHTML() {
        const cardDiv = document.createElement ('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = $(this.value); $(this.suit)
        return cardDiv
    }
}
function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value) 
        })
    })
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
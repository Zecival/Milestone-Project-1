import Deck from './deck.js'

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 2,
    "4": 2,
    "5": 2,
    "6": 2,
    "7": 2,
    "8": 2,
    "9": 2,
    "10": 2,
    "j": 2,
    "q": 2,
    "k": 2,
}

const computerCardSlot = docuemnt.querySelector('.computer-card-slot')
const playerCardSlot = docuemnt.querySelector('.player-card-slot')
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('.text')

let playerDeck, computerDeck
let inRound = false

document.addEventListener('click', () => {
    if(inRound) {
        cleanBeforeRound()
    } else {
        flipCards
    }
})

startGame()
function startGame () {
    const deck = new Deck()
    deck.shuffle()
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(0, deckMidpoint, deck.numberOfCards))
    inRound = false

    cleanBeforeRound()
}

function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innerText = ''

    updateDeckCount()
}

function flipCards() {
    inRound = true

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(Card.getHTML())

    updateDeckCount()
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}

function isRoundWinner(cardOne, cardTwo) {

}

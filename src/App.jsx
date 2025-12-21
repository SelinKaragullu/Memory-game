import { GameHeader } from "./components/GameHeader"
import Card from "./components/Card"
import React from 'react'

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
]



function App() {

 const [cards, setCards] = React.useState([])
 const [flippedCards, setFlippedCards] = React.useState([])


    const initializeGame= ()=> {
       //Shuffle the cards
      const finalCards = cardValues.map((value,index) => ({
id: index,
value,
isFlipped:false,
isMatched:false
  }))
   
    setCards(finalCards)
  }

  React.useEffect(()=> {
     initializeGame()
  },[])

const handleCardClick = (card) => {
  if (card.isFlipped || card.isMatched) return

  // Update card flipped state
  const newCards = cards.map(c => {
    if (c.id === card.id) {
      return { ...c, isFlipped: true }
    } else {
      return c
    }
  })

  setCards(newCards)

const newFlippedCards = [...flippedCards, card.id]
setFlippedCards(newFlippedCards)


if (flippedCards.length===1) {
  const firstCard = cards[flippedCards[0]]

  if(firstCard.value === card.value) {
    alert("matched")
  }

 

}
 else if(flippedCards.length===2) {
    setFlippedCards([])
  }
}






  return (
    <div className="app">
      <GameHeader score={3} moves={2} />

      <div className="cards-grid">
{cards.map(card => (
  <Card key={card.id} card={card} onClick={handleCardClick} />
))}

      </div>
    </div>
  )
}

export default App 
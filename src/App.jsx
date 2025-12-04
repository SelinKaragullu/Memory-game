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
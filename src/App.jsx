import React, { useState, useEffect } from 'react'
import { GameHeader } from "./components/GameHeader"
import Card from "./components/Card"
import {WinMessage} from "./components/WinMessage"

const cardValues = [
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
]



function App() {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [moves,setMoves] = useState(0)

const score = (cards.filter((card)=>card.isMatched===true)).length/2


  const initializeGame = () => {
    const finalCards = cardValues
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }))
    


    setCards(finalCards)
    setMoves(0)
    

    
    setFlippedCards([])
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleCardClick = (clickedCard) => {
    if (clickedCard.isFlipped || clickedCard.isMatched || flippedCards.length === 2) return

    const newCards = cards.map(c => 
      c.id === clickedCard.id ? { ...c, isFlipped: true } : c
    )
    setCards(newCards)

    const newFlipped = [...flippedCards, clickedCard.id]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(prev=>prev+1)
      const firstCardId = newFlipped[0]
      const secondCardId = clickedCard.id
      
      const firstCard = cards.find(c => c.id === firstCardId)
      const secondCard = clickedCard

      if (firstCard.value === secondCard.value) {
        setCards(prev => prev.map(c => {
          if (c.id === firstCardId || c.id === secondCardId) {
            return { ...c, isMatched: true, isFlipped: true }
          }
          return c
        }))
        setFlippedCards([]) 
        
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c => {
            if (c.id === firstCardId || c.id === secondCardId) {
              return { ...c, isFlipped: false }
            }
            return c
          }))
          setFlippedCards([]) 
        }, 1000)
      }
    }
  }


 const isGameComplete = cards.length > 0 
 && cards.every(card => card.isMatched === true)

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame}/>
      { isGameComplete && <WinMessage moves={moves}/>}

      <div className="cards-grid">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            onClick={handleCardClick} 
          />
        ))}
      </div>
    </div>
  )
}

export default App
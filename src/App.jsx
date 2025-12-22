import React, { useState, useEffect } from 'react'
import { GameHeader } from "./components/GameHeader"
import Card from "./components/Card"

const cardValues = [
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
]

function App() {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([]) // Stores only IDs of currently flipped cards
  
  // Initialize and Shuffle the Game
  const initializeGame = () => {
    const finalCards = cardValues
      .sort(() => Math.random() - 0.5) // Simple shuffle
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }))
    
    setCards(finalCards)
    setFlippedCards([])
  }

  // Start game on first load
  useEffect(() => {
    initializeGame()
  }, [])

  const handleCardClick = (clickedCard) => {
    // 1. GUARD CLAUSE: Stop if card is already flipped, matched, or if 2 cards are already open
    if (clickedCard.isFlipped || clickedCard.isMatched || flippedCards.length === 2) return

    // 2. Visually flip the clicked card
    const newCards = cards.map(c => 
      c.id === clickedCard.id ? { ...c, isFlipped: true } : c
    )
    setCards(newCards)

    // 3. Add to the tracker
    const newFlipped = [...flippedCards, clickedCard.id]
    setFlippedCards(newFlipped)

    // 4. Check for Match (Only if we now have 2 cards flipped)
    if (newFlipped.length === 2) {
      const firstCardId = newFlipped[0]
      const secondCardId = clickedCard.id
      
      const firstCard = cards.find(c => c.id === firstCardId)
      const secondCard = clickedCard

      if (firstCard.value === secondCard.value) {
        // --- MATCH FOUND ---
        // Mark both cards as matched and keep them flipped
        setCards(prev => prev.map(c => {
          if (c.id === firstCardId || c.id === secondCardId) {
            return { ...c, isMatched: true, isFlipped: true }
          }
          return c
        }))
        // Reset the tracker immediately so user can click next pair
        setFlippedCards([]) 
        
      } else {
        // --- NO MATCH ---
        // Wait 1 second so user can see the cards, then flip them back
        setTimeout(() => {
          setCards(prev => prev.map(c => {
            if (c.id === firstCardId || c.id === secondCardId) {
              return { ...c, isFlipped: false } // Flip back over
            }
            return c
          }))
          setFlippedCards([]) // Reset the tracker
        }, 1000)
      }
    }
  }

  return (
    <div className="app">
      {/* Assuming GameHeader takes these props */}
      <GameHeader score={0} moves={0} />

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



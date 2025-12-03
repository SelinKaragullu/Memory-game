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

  



  const cardGridValues = cardValues.map((card,index) => (
    <Card key={index} card={card} />)
  )



  return (
    <div className="app">
      <GameHeader score={3} moves={2} />

      <div className="cards-grid">
{cardGridValues}
      </div>
    </div>
  )
}

export default App

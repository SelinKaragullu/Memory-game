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

 
   
    function initializeGame () {

       const finalCards = cardValues.map((card,index)=>( 
       {id:index,
        value:card,
        isFlipped: false,
        isMatched: false
       }
        ))

      setCards(finalCards)
    }

React.useEffect(()=>{
  initializeGame()
},[]) 


function handleClick (c) {
const newCards = cards.map((card)=> (
  card.id ===  c.id? {...card, isFlipped:true} : card
))
setCards(newCards)
}

  return (
    <div className="app">
      <GameHeader score={3} moves={2} />

      <div className="cards-grid">

{cards.map((cardObj)=><Card
key={cardObj.id}
card={cardObj}
onClick={(handleClick)}
/>
)}
 

      </div>
    </div>
  )
}

export default App 
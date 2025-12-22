import React from 'react'
export default function App () 

{
    const cardValues = [
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
]

const [cards, setCards] = React.useState([])

React.useEffect(()=>{const newCards = cardValues.map((card,index)=>{return {id:index, value:card, isFlipped:false, isMatched:false
}})
setCards(newCards)

},[])

 const values = cards.map((card)=><div onClick={()=>{handleCardClick(card.id)}} key={card.id} >{card.isFlipped? card.value : "?"}</div>)

 function handleCardClick(id) {
  const newCards = cards.map((card)=>{return card.id===id ? {...card, isFlipped: !card.isFlipped} : card
  })

  setCards(newCards)
 }

 return (

   <div>
    {values}
   </div>
)

}
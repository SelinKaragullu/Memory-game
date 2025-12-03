import React from 'react'


export default function Card({ card }) {
    const questionMark = "?"
    const [cardOn, setCardOn] = React.useState(false)
    function swapCard() {
        setCardOn(prev => !prev)
    }

    return <div className="card" onClick={swapCard}>
        <div className="card-back">
            {cardOn ? card : questionMark}
        </div>
    </div>
}



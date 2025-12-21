import React from "react";

export default function Card({ card, onClick }) {
  return (
    <div className={`card ${card.isFlipped? "flipped" : ""}`}
    onClick={()=>onClick(card)}>
      
      {!card.isFlipped ? 
      <div className="card-front">?</div> :
      <div className="card-back">
      {card.value}
      </div> }
    </div>
  );
}
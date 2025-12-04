import React from "react";

export default function Card({ card, onClick }) {
  return (
    <div className="card" onClick={() => onClick(card)}>
      <div className="card-front">?</div>
      <div className="card-back">
        {card.isFlipped ? card.value : "?"}
      </div>
    </div>
  );
}
import React from "react";

import Card from "../Card";

const Deck = () => {
  const cards = ["", "", "", ""];

  return (
    <div>
      <h1>Deck</h1>
      <ul>
        {cards.map((card, index) => {
          return (
            <li key={index}>
              <Card />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Deck;

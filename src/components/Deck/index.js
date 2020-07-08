import React from "react";
import { CardDeck } from "reactstrap";

import Card from "../Card";
import "./styless.css";

const Deck = () => {
  const cards = ["", "", "", ""];

  return (
    <div>
      <h1>Deck</h1>
      <CardDeck className="card-deck">
        {cards.map((card, index) => {
          return <Card key={index} />;
        })}
      </CardDeck>
    </div>
  );
};

export default Deck;

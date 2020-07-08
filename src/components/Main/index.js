import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";

import Header from "../Header";
import Deck from "../Deck";
import Chart from "../Chart";

import "./styless.css";
import api from "../../api/api.js";

const Main = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    api.get("pokemon?limit=10&offset=20").then(response => {
      console.log(response.data.results);
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      {pokemonList ? (
        <div className="main">
          <Deck />
          <Chart />
        </div>
      ) : (
        <div>
          <Spinner type="grow" color="success" />
          <Spinner type="grow" color="danger" />
          <Spinner type="grow" color="warning" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Main;

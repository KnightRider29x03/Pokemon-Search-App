import React from "react";
import PokemonList from "./PokemonList";
import "./Main.css";
import pokeball from "./pokeball.jpg";


function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={pokeball} className="Pokeball" alt="Pokeball" />
        <h1>Pokémon List</h1>
      </header>
      <PokemonList />
    </div>
  );
}

export default Main;

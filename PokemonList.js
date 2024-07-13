import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const results = response.data.results;
      const pokemonData = await Promise.all(
        results.map(async (p) => {
          const pokemonDetails = await axios.get(p.url);
          return pokemonDetails.data;
        })
      );
      setPokemon(pokemonData);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="pokemon-list">
        {filteredPokemon.map((p) => (
          <div key={p.id} className="pokemon-card">
            <img src={p.sprites.front_default} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;

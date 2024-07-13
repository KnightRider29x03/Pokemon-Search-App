import React from "react";
//import React, { useState, useEffect } from "react";
//import UserCard from "./components/user.js";
//import axios from "axios";
//import UserDetails from "./components/userdetails.js";
//import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
//import Login from "./Login";
//import UserList from "./UserList";
//import Register from "./Register";
//import Home from "./Home";
import PokemonList from "./PokemonList";
import "./Main.css";
import pokeball from "./pokeball.jpg";
//import ProductForm from "./vendor";

function Main() {
  {
    /*const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<UserCard users={users} setSelected={setSelected} />}
        />
        <Route
          path="/user/:name"
          element={<UserDetails selected={selected} />}
        />
      </Routes>
    </BrowserRouter>
  );*/
  }

  /*return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );*/
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

import React from "react";
import Pokedex from "./components/pokedex";
import NotFound from "./components/notFound";
import PokeInfo from "./components/pokeInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Pokedex />} />
          <Route path={"*"} element={<NotFound />} />
          <Route path={"/pokeinfo/*"} element={<PokeInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

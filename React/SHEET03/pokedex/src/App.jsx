import React from "react";
import PokeGrid from "./components/pokegrid";
import Pokedex from "./components/pokedex";
import NotFound from "./components/NotFound";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Pokedex />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Basketball } from "./components/Basketball";
import { Baseball } from "./components/Baseball";
import { Football } from "./components/Football";
import { FavoriteTeams } from "./components/FavoriteTeams";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/baseball" element={<Baseball />} />
        <Route path="/favorites" element={<FavoriteTeams />} />
      </Routes>
    </div>
  );
}

export default App;

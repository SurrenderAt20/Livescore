import React, { useState } from "react";
import { IoIosFootball, IoIosBaseball, IoIosBasketball } from "react-icons/io";
import "../styles/VerticalNavBar.css";

const sports = [
  {
    name: "Football",
    icon: <IoIosFootball />,
    leagues: ["Premier League", "La Liga", "Bundesliga", "Serie A"],
    countries: [
      "England",
      "Denmark",
      "Germany",
      "France",
      "Spain",
      "Italy",
      "Scotland",
      "Portugal",
    ],
    path: "/football",
  },
  {
    name: "Baseball",
    icon: <IoIosBaseball />,
    leagues: ["MLB", "Nippon Professional Baseball", "KBO League"],
    countries: [
      "England",
      "Denmark",
      "Germany",
      "France",
      "Spain",
      "Italy",
      "Scotland",
      "Portugal",
    ],
    path: "/baseball",
  },
  {
    name: "Basketball",
    icon: <IoIosBasketball />,
    leagues: ["NBA", "EuroLeague", "Basketball Bundesliga"],
    countries: [
      "England",
      "Denmark",
      "Germany",
      "France",
      "Spain",
      "Italy",
      "Scotland",
      "Portugal",
    ],
    path: "/basketball",
  },
];

export const VerticalNavBar = () => {
  const [selectedSport, setSelectedSport] = useState(sports[0]);
  const [showLeagues, setShowLeagues] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  const handleLeagueClick = () => {
    setShowLeagues(!showLeagues);
    setShowCountries(false);
  };

  const handleCountryClick = () => {
    setShowCountries(!showCountries);
    setShowLeagues(false);
  };

  return (
    <nav className={`verticalNavBar ${showCountries ? "expanded" : ""}`}>
      <ul>
        <li className="menuItem" onClick={handleLeagueClick}>
          <h2>Leagues</h2>
          {showLeagues && (
            <ul className="subMenu">
              {selectedSport.leagues.map((league, index) => (
                <div className="leagues">
                  <li key={index}>{league}</li>
                </div>
              ))}
            </ul>
          )}
        </li>
        <li className="menuItem" onClick={handleCountryClick}>
          <h2>Countries</h2>
          {showCountries && (
            <ul className="subMenu">
              {selectedSport.countries.map((country, index) => (
                <div className="countries">
                  <li key={index}>{country}</li>
                </div>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

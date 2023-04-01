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
  };

  const handleCountryClick = () => {
    setShowCountries(!showCountries);
  };

  return (
    <nav className="verticalNavBar">
      <ul>
        <li className="menuItem" onClick={handleLeagueClick}>
          <h2>Leagues</h2>
          {showLeagues && (
            <ul className="subMenu">
              {selectedSport.leagues.map((league, index) => (
                <li key={index}>{league}</li>
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
                  <ul>
                    {selectedSport.countries.map((country, index) => (
                      <li key={index}>{country}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

/* return (
    <nav className="verticalNavBar">
      <ul>
        {sports.map((sport) => (
          <li
            key={sport.path}
            onClick={() => handleSportClick(sport)}
            className={selectedSport === sport ? "active" : ""}
          >
            {sport.icon}
            <span>{sport.name}</span>
          </li>
        ))}
        <li className="menuItem" onClick={handleLeagueClick}>
          Leagues
          {showLeagues && (
            <ul className="subMenu">
              {selectedSport.leagues.map((league, index) => (
                <li key={index}>{league}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <div className="leagues">
        <h3>{selectedSport.name} Leagues</h3>
        <ul>
          {selectedSport.leagues.map((league, index) => (
            <li key={index}>{league}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}; */

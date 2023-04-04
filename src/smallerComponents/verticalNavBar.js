import React, { useState } from "react";
import { IoIosFootball, IoIosBaseball, IoIosBasketball } from "react-icons/io";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md"
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
          <div className="menuHeadline">
            <h3>Leagues</h3>
            {showLeagues ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
          </div>
          {showLeagues && (
            <ul className="subMenu">
              {selectedSport.leagues.map((league, index) => (
                <div className="leagues">
                  <li key={index}><span>{league}</span></li>
                </div>
              ))}
            </ul>
          )}
        </li>
        <li className="menuItem" onClick={handleCountryClick}>
          <div className="menuHeadline">
            <h3>Countries</h3>
            {showCountries ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
          </div>
          {showCountries && (
            <ul className="subMenu">
              {selectedSport.countries.map((country, index) => (
                <div className="countries">
                  <li key={index}><span>{country}</span></li>
                </div>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

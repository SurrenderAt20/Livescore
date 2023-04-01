import React from "react";
import { useState } from "react";
import { IoIosFootball, IoIosBaseball, IoIosBasketball } from "react-icons/io";

const sports = [
  {
    name: "Football",
    icon: <IoIosFootball />,
    leagues: ["Premier League", "La Liga", "Bundesliga", "Serie A"],
  },
  {
    name: "Baseball",
    icon: <IoIosBaseball />,
    leagues: ["MLB", "Nippon Professional Baseball", "KBO League"],
  },
  {
    name: "Basketball",
    icon: <IoIosBasketball />,
    leagues: ["NBA", "EuroLeague", "Basketball Bundesliga"],
  },
];

export const verticalNavBar = () => {
  const [selectedSport, setSelectedSport] = useState(sports[0]);

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  return <div>verticalNavBar</div>;
};

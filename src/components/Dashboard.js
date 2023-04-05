import React from "react";
import { NavBar } from "./NavBar";
import { VerticalNavBar } from "../smallerComponents/VerticalNavBar";
import { LivescoreBoard } from "../smallerComponents/LivescoreBoard";
import "../styles/Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="dashboardContainer">
        <VerticalNavBar />
        <LivescoreBoard />
      </div>
    </div>
  );
};

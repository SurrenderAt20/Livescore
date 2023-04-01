import React from "react";
import { NavBar } from "./NavBar";
import { VerticalNavBar } from "../smallerComponents/VerticalNavBar";
import "../styles/Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="container">
      <NavBar />
      <VerticalNavBar />
    </div>
  );
};

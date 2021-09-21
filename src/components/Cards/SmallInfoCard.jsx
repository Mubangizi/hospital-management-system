import React from "react";
import "./Cards.css";
const SmallInfoCard = ({ name, value }) => {
  return (
    <div className="InfoCard Card">
      <div className="CardName">{name}</div>
      <div className="CardValue">{value}</div>
    </div>
  );
};

export default SmallInfoCard;

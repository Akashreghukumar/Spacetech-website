import React from "react";
import "../TravelCard/TravelCard.css";

const TravelCards = () => {
  const packages = [
    {
      type: "Basic",
      days: "1 Day",
      to: "Space",
      btc: "10 BTC",
      
    },
    {
      type: "Suite",
      days: "6 Days",
      to: "Moon",
      btc: "30 BTC",
    },
    {
      type: "Premium",
      days: "15 Days",
      to: "Mars",
      btc: "100 BTC",
    },
  ];
  return (
    <div className="container">
      {packages.map((item) => {
        return (
          <div className="card">
            <h1>{item.type}</h1>
            <p style={{ color: "white" }}>{item.days}</p>
            <h1>{item.to}</h1>
            <p style={{ color: "white" }}>{item.btc}</p>
            
           
              
          </div>
        );
      })}
    </div>
  );
};

export default TravelCards;

import React from "react";
import Card from "./Card";

function CardContainer() {
  return (
    <div className="card-container">
      <div className="cardContainer-heading">
        <h5 className="bold">Best of Electronics</h5>
        <div className="arrow">
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 17 17"
            style={{
              marginLeft: "4px",
              marginRight: "4px",
              marginTop: "4px",
              marginBottom: "4px",
            }}
          >
            <path
              d="M6.627 3.749l5 5-5 5"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CardContainer;

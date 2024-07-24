import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function CardContainer({ category }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const capitalizeFirstLetter = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        json.forEach((item) => {   
          item.quantity =  1;
        });
        setItems(json)
  });
  }, [category]);

  const handleOnClick = () => {
    
    navigate("/ProductsPage", { state: { category: category, items: items } });
  };

  return (
    
    <div className="card-container">
      <div className="cardContainer-heading">
        <h5 className="bold">{capitalizeFirstLetter(category)}</h5>
        
        <div className="arrow" onClick={handleOnClick} style={{ cursor: "pointer" }}>
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
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;

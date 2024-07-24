import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductsPage() {
  const location = useLocation();
  const navigate=useNavigate();
  const { category, items } = location.state || {};

   const handleClick=(item)=>{
    navigate("/Product", { state: {  item: item } });
   }
  return (
    <div className="productPage-Container">
       <div className="productUpperContainer">
        <h3>{category}</h3>
        <span className="grey">{items.length} items</span>
       </div>
       <div className="productLowerContainer">
            {
                items.map((item)=>(
                    <div className="productContainerCard" onClick={()=>handleClick(item)}>
                        <div className="productIMageWrapper">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productContainerTextWrapper">
                            <p className="bold">{`${item.title.slice(0,20)}...`}</p>
                            <p className="green">Upto 40% Off</p>
                            <p>Price: Rs.{item.price}</p>
                        </div>
                    </div>
                ))
            }
       </div>
    </div>
  );
}

export default ProductsPage;

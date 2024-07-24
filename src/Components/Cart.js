import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
function Cart() {
  const cartItems = useSelector((state) => state.cartItems || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 20;
  const deliveryCharge = 70;
  const finalPrice = totalPrice - discount;

  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id: id, quantity: item.quantity + 1 }));
    }
  };
  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id: id, quantity: item.quantity - 1 }));
    }
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const user = localStorage.getItem("user");
  return (
    <>
      {" "}
      {user ? (
        <div className="cartContainer">
          <div className="flipkart">
            <div className="cart-left">
              <div className="cartHeading">
                <span
                  style={{
                    color: "blue",
                    borderBottom: "2px solid blue",
                    padding: "5px 50px",
                  }}
                >
                  Flipkart
                </span>
                <span>Grocery</span>
              </div>

              <div className="cartAddress">
                <div className="addressLeft">
                  <div>
                    Deliver to:{" "}
                    <span className="bold">Priyanshi Chouhan, 452012</span>
                    <span className="homeBox">HOME</span>
                  </div>
                  <div className="grey" style={{ marginTop: "10px" }}>
                    582, Dutt Nagar, Rajendra Nagar, Indore
                  </div>
                </div>
                <div className="addressRight">
                  <button>Change</button>
                </div>
              </div>

              <div className="cartItems">
                {cartItems.map((item) => (
                  <div className="cartCard" key={item.id}>
                    <div className="cartImgWrapper">
                      <img src={item.image} alt="" />
                      <div className="quantity">
                        <div
                          className="quantityBtn"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </div>
                        <div className="quantityText">{item.quantity}</div>
                        <div
                          className="quantityBtn"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="cartItemDetails">
                      <span className="bold">{`${item.title.slice(
                        0,
                        100
                      )}...`}</span>
                      <span className="grey">{item.category}</span>
                      <div className="cartSeller">
                        <span className="grey">Seller: RetailNet</span>
                        <span>
                          <img
                            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="cartItemLowerText">
                        <span className="grey cut">&#8377;100</span>
                        <span className="bold" style={{ fontSize: "18px" }}>
                          {" "}
                          &#8377;{Math.floor(item.price)}
                        </span>
                        <span className="green"> 88% Off 2 Offer applied </span>
                        <svg
                          width="14"
                          height="14"
                          xmlns="http://www.w3.org/2000/svg"
                          className="V7YGsc"
                        >
                          <g fill="none">
                            <path d="M-1-1h16v16H-1"></path>
                            <path
                              d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z"
                              fill="#388e3c"
                              className=""
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div className="cartButtons">
                        <p>SAVE FOR LATER</p>
                        <p onClick={() => handleRemoveFromCart(item.id)}>
                          REMOVE
                        </p>
                      </div>
                    </div>
                    <div className="cartItemLeft">
                      <span>Delivery by 11 PM, Tomorrow </span>
                      <span>
                        <span className="grey cut">&#8377;70</span>{" "}
                        <span className="green">Free</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart-right">
              <div>
                <div style={{ borderBottom: "1px solid grey" }}>
                  <p className="grey bold">PRICE DETAILS</p>
                </div>
                <div style={{ borderBottom: "1px dotted grey" }}>
                  <div className="priceDetails">
                    <div>
                      Price ({cartItems.length} item
                      {cartItems.length > 1 ? "s" : ""})
                    </div>
                    <div>&#8377;{Math.floor(totalPrice)}</div>
                  </div>
                  <div className="priceDetails">
                    <div>Discount</div>
                    <div className="green">-&#8377;{discount}</div>
                  </div>
                  <div className="priceDetails">
                    <div>Delivery Charges</div>
                    <div className="green">
                      <span className="grey cut">&#8377;{deliveryCharge}</span>{" "}
                      Free
                    </div>
                  </div>
                </div>
                <div
                  className="priceDetails"
                  style={{
                    borderBottom: "1px dotted grey",
                    paddingBottom: "13px",
                  }}
                >
                  <div>Total Amount</div>
                  <div>&#8377;{Math.floor(finalPrice)}</div>
                </div>
                <div className="priceDetails">
                  <p className="green">
                    You will save ₹{discount} on this order
                  </p>
                </div>
              </div>
              <div className="cartRightBottom">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
                  alt=""
                />
                <div>
                  <p>
                    Safe and Secure Payments.Easy returns.100% Authentic
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cartEmptyContainer">
          <div className="cartEmptyImg">
            <img
              src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
            />
          </div>
          <div className="cartEmptyText">
            <p>Missing Cart items?</p>
            <span>Login to see the items you added previously</span>
          </div>
          <div className="emptyCartBtn" onClick={() => navigate("/Login")}>
            Login
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

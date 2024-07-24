import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart, addToWishList } from "../features/cartSlice";
function ProductDetails() {
  const location = useLocation();

  const { item } = location.state ? location.state : {};
  const price = item.price;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishListItems = useSelector((state) => state.wishListItems || []);
  const [isInWishlist, setIsInWishList] = useState(false);
  useEffect(() => {
    setIsInWishList(wishListItems.some((wishlistItem) => wishlistItem.id === item.id));
  }, [wishListItems, item]);

  const handleGoTOCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    navigate("/Cart");
  };

  const handleAddToWishList = (item) => {
    dispatch(addToWishList(item));
    setIsInWishList(true);
    alert("Added to wishlist");
  };
  return (
    <div>
      <div className="productContainer">
        <div className="productLeftContainer">
          <img src={item.image} alt="" />
          <div className="wishList" onClick={() => handleAddToWishList(item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="N1bADF"
              width="16"
              height="16"
              viewBox="0 0 20 16"
            >
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                fill={isInWishlist ? "#ff4343" : "#2874F0"}
                class="x1UMqG"
                stroke="#FFF"
                fill-rule="evenodd"
                opacity=".9"
              >

              </path>
            </svg>
          </div>
          <div className="productButtonWrapper">
            <div className="cartbutton">
              <div className="btn yellow" onClick={() => handleGoTOCart(item)}>
                <svg
                  class="NwyjNT"
                  width="16"
                  height="16"
                  viewBox="0 0 16 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class=""
                    d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                    fill="#fff"
                  ></path>
                </svg>
                GO TO CART
              </div>
              <div className="btn orange">
                <span className="btn-icon"></span>
                BUY NOW
              </div>
            </div>
          </div>
        </div>
        <div className="productRightContainer">
          <div className="productHeading">
            <p>{item.title} </p>
            <span className="rating">
              4
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                alt=""
              />
            </span>
            <span className="grey">71,460 Ratings & 8,989 Reviews</span>
            <span className="f-assured">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt=""
              />
            </span>
          </div>
          <div className="price">
            <p className="green">Special Price</p>
            <p>
              <span className="bold" style={{ fontSize: "30px" }}>
                &#8377;{Math.floor(item.price)}
              </span>{" "}
              <span
                className="grey"
                style={{ textDecoration: "line-through", margin: "10px" }}
              >
                &#8377;11,999
              </span>{" "}
              <span className="green">88% off</span>
            </p>
          </div>
          <div className="offers">
            <p className="bold">Available offers</p>
            <div className="offerText">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
              <span>
                {" "}
                <span className="bold">Bank Offer</span> Get ₹50 Instant
                Discount on first Flipkart UPI transaction on order of ₹200 and
                above <span className="blue">T&C</span>
              </span>
            </div>

            <div className="offerText">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
              <span>
                {" "}
                <span className="bold">Bank Offer</span> 5% Cashback on Flipkart
                Axis Bank Card <span className="blue">T&C</span>
              </span>
            </div>

            <div className="offerText">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
              <span>
                {" "}
                <span className="bold">Bank Offer</span> Get extra 22% off
                (price inclusive of cashback/coupon){" "}
                <span className="blue">T&C</span>
              </span>
            </div>

            <div className="offerText">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
              <span>
                {" "}
                <span className="bold">Bank Offer</span> Sign-up for Flipkart
                Pay Later & get free Times Prime Benefits worth ₹20,000*{" "}
                <span className="blue">Know More</span>
              </span>
            </div>

            <div className="blue bold" style={{ marginTop: "10px" }}>
              View 2 more offers
            </div>
          </div>
          <div className="delivery">
            <span className="grey bold">Delivery</span>
            <div className="deliveryInput">
              <div className="input-container">
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 9 12"
                    class="_5hV6Fd"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#2874f0"
                      class="Z87Ib1"
                      d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <input type="text" />
                <span className="blue bold">Change</span>
              </div>
              <div className="deliveryText">
                <p>
                  Faster delivery by11 PM Tomorrow{" "}
                  <span className="grey">|</span>{" "}
                  <span className="green">Free </span>
                  <span className="grey cut">&#8377;70</span>
                </p>
                <p className="blue">View Details</p>
              </div>
            </div>
          </div>
          <div className="highlight delivery">
            <span className="grey bold">Highlights</span>
            <div className="highlightTextContainer">
              <li>
                <span>
                  Enjoy a Seamless connection with a Single BT Connection
                  Chipset
                </span>
              </li>
              <li>
                <span>
                  Bluetooth Calling Smartwatch with AI Voice Assistance,
                  Built-In Speaker & Microphone
                </span>
              </li>
              <li>
                <span>
                  Blood Oxygen Monitoring with Optical Heart Rate Tracking,
                  Sleep Tracking
                </span>
              </li>
              <li>
                <span>With Call Function</span>
              </li>
              <li>
                <span>Touchscreen</span>
              </li>
              <li>
                <span>Fitness & Outdoor</span>
              </li>
              <li>
                <span>Battery Runtime: Upto 7 days</span>
              </li>
            </div>
          </div>
          <div className="superCoinContainer">
            <img
              src="https://rukminim2.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50"
              alt=""
            />
          </div>

          <div className="protectProduct">
            <div className="protectHeading">Protect your product</div>
            <div className="protectFirst">
              <div>
                <input type="checkbox" name="" id="" checked />
              </div>
              <div className="protectImage">
                <img
                  src="https://rukminim2.flixcart.com/image/312/312/kex5ci80/digital-combo/a/h/z/1-online-transaction-frauds-on-all-bank-accounts-credit-debit-original-imafvg2rkfrqhpzr.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="protectFirstText">
                <p className="bold">
                  Digital Suraksha for Rs 10000 by Bajaj Allianz
                </p>
                <p className="small">
                  Get your financial losses covered for online transaction
                  frauds on all bank accounts, credit/ debit cards, mobile
                  wallets. Covers scam calls, OTP SMS frauds, UPI, netbanking,
                  Cyber Attacks, Sim-swapping, Phishing, Spoofing and more.{" "}
                  <span className="blue">Know More</span>
                </p>
                <p className="grey small">
                  Digital Suraksha for Rs 10000 by Bajaj Allianz.
                </p>
                <p>
                  &#8377;20 <span className="grey cut small">&#8377;40 </span>{" "}
                  <span className="green small"> 50% off</span>
                </p>
                <p className="coin">
                  Or Pay &#8377;18 +{" "}
                  <span>
                    <img
                      src="https://rukminim2.flixcart.com/www/100/100/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png?q=90"
                      alt=""
                    />
                  </span>
                  2
                </p>
              </div>
            </div>


            <div className="protectFirst">
              <div>
                <input type="checkbox" name="" id="" checked />
              </div>
              <div className="protectImage second">
                <img
                  src="https://rukminim2.flixcart.com/image/312/312/kzhbfrk0/extended-warranty-new/c/m/x/-original-imagbhk3gz8zjzzf.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="protectFirstText">
                <p className="bold">Home Content Protection for INR 25,000</p>
                <p className="small">
                  This plan comes with Sum Insured of INR 25,000 and ensures the
                  safety of various household items like furniture, fixtures,
                  tools, electronics, clothing, and more from Natural Calamities
                  like Fire, Earthquake, Lighting, Flood, Hurricane and more.
                  <span className="blue">Know More</span>
                </p>
                <p className="grey small">
                  Tip : Home Content Protection by OneAssist
                </p>
                <p>
                  &#8377;29 <span className="grey cut small">&#8377;39 </span>{" "}
                  <span className="green small"> 25% off</span>
                </p>
                <p className="coin">
                  Or Pay &#8377;18 +{" "}
                  <span>
                    <img
                      src="https://rukminim2.flixcart.com/www/100/100/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png?q=90"
                      alt=""
                    />
                  </span>
                  2
                </p>
              </div>
            </div>
            <div className="amountCalc">
              <div className="calc">
                <div className="amount">
                  <span className="grey small">1 Item</span>
                  <span className="bold" style={{ fontSize: "20px" }}>
                    &#8377;{item.price}
                  </span>
                </div>
                <div
                  className="grey"
                  style={{ fontSize: "20px", paddingTop: "35px" }}
                >
                  +
                </div>
                <div className="amount">
                  <span className="grey small">2 Add-ons</span>
                  <span className="bold" style={{ fontSize: "20px" }}>
                    &#8377;49
                  </span>
                </div>
                <div
                  className="grey"
                  style={{ fontSize: "20px", paddingTop: "35px" }}
                >
                  =
                </div>
                <div className="total amount">
                  <span className="grey  small">Total</span>
                  <span className="bold" style={{ fontSize: "20px" }}>
                    &#8377;{Number(price) + 49}
                  </span>
                </div>
              </div>
              <div className="protectButton">
                <svg
                  class="XWLYwr"
                  width="16"
                  height="16"
                  viewBox="0 0 16 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class=""
                    d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                    fill="#fff"
                  ></path>
                </svg>
                <p>ADD 3 ITEMS TO CART</p>
              </div>
            </div>
          </div>
          <div className="description delivery">
            <span className="grey bold">Description</span>
            <div className="descriptionText">
              <span>{item.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;

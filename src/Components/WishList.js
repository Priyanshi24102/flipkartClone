import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromWishList } from "../features/cartSlice";
function WishList() {
  const wishListItems = useSelector((state) => state.wishListItems || []);
  const navigate = useNavigate();
  const [newAddress, setNewAddress] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("user");
    navigate("/");
  };
  const [display, setDisplay] = useState("wishlist");
  const handleDelete = (id) => {
    dispatch(removeFromWishList(id));
  };
  const handleClick = (item) => {
    navigate("/Product", { state: { item: item } });
  };
  return (
    <div className="wishListContainer">
      <div className="leftWishListContainer">
        <div className="profile">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
            alt=""
          />
          <span className="bold">Hello</span>
        </div>
        <div className="profileInfo">
          <div className="myOrders profileCont iconCont">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg=="
              alt=""
            />
            <span>MY ORDERS</span>
          </div>
          <div className="account profileCont">
            <div className="iconCont">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4="
                alt=""
              />
              <span>ACCOUNT SETTINGS</span>
            </div>
            <div className="InfoCont">
              <span onClick={() => setDisplay("profile")}>
                Profile Information
              </span>
              <span onClick={() => setDisplay("address")}>
                Manage Addresses
              </span>
              <span onClick={() => setDisplay("pan")}>
                PAN Card Information
              </span>
            </div>
          </div>
          <div className="payments profileCont">
            <div className="iconCont">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+"
                alt=""
              />
              <span>PAYMENTS</span>
            </div>
            <div className="InfoCont">
              <span onClick={() => setDisplay("gift")}>Gift Cards</span>
              <span onClick={() => setDisplay("upi")}>Saved UPI</span>
              <span onClick={() => setDisplay("cards")}>Saved Cards</span>
            </div>
          </div>
          <div className="myStuff profileCont">
            <div className="iconCont">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4="
                alt=""
              />
              <span>MY STUFF</span>
            </div>
            <div className="InfoCont">
              <span onClick={() => setDisplay("coupons")}>My Coupons</span>
              <span onClick={() => setDisplay("reviews")}>
                My Reviews & Ratings
              </span>
              <span onClick={() => setDisplay("notification")}>
                All Notifications
              </span>
              <span onClick={() => setDisplay("wishlist")}>My Wishlist</span>
            </div>
          </div>
          <div className="logOut profileCont iconCont" onClick={handleLogOut}>
            <svg
              width="24"
              height="24"
              class=""
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#2874F0"
                stroke-width="0.3"
                stroke="#2874F0"
                d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
              ></path>
            </svg>
            <span>Logout</span>
          </div>
        </div>
        <div className="frequentVisited">
          <span className="bold">Frequently Visited:</span>
          <span className="grey">
            <span>Track Order </span> &nbsp; <span> Help Center</span>
          </span>
        </div>
      </div>
      <div className="rightWishListContainer">
        {display === "wishlist" && (
          <>
            <div className="myWishList">
              <p>My Wishlist ({wishListItems.length})</p>
            </div>

            {wishListItems.length > 0 ? (
              wishListItems.map((item, index) => (
                <div
                  key={index}
                  className="wisListItemCont"
                  onClick={() => handleClick(item)}
                >
                  <div className="wishlistImg">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="wishlistText">
                    <div className="upperText">
                      <span>{`${item.title.slice(0, 55)}...`}</span> <br />
                      <div className="wishlistRating">
                        3.8
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                          alt=""
                        />
                      </div>
                      <span className="grey bold small">(8,001)</span>
                      <span className="flipkartAssured">
                        <img
                          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="lowerText">
                      <span className="bold wishlistPrice">
                        &#8377;{item.price}
                      </span>
                      <span className="grey cut small">&#8377;100</span>
                      <span className="green small">20% off</span>
                    </div>
                  </div>
                  <div
                    className="deleteBtn"
                    onClick={() => handleDelete(item.id)}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLjUuNWgxNXYxNWgtMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0MyQzJDMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMSAxMy44MzNjMCAuOTE3Ljc1IDEuNjY3IDEuNjY3IDEuNjY3aDYuNjY2Yy45MTcgMCAxLjY2Ny0uNzUgMS42NjctMS42Njd2LTEwSDF2MTB6bTEwLjgzMy0xMi41SDguOTE3TDguMDgzLjVIMy45MTdsLS44MzQuODMzSC4xNjdWM2gxMS42NjZWMS4zMzN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt=""
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Your wishlist is empty.</p>
            )}
          </>
        )}

        {display === "address" && (
          <>
            {" "}
            <div className="myWishList">
              <p>Manage Address</p>
            </div>
            {newAddress === false ? (
              <>
                <div
                  className="addNewAddress"
                  onClick={() => setNewAddress(true)}
                >
                  <span style={{ fontSize: "25px" }}>+</span>
                  <span>ADD A NEW ADDRESS</span>
                </div>
              </>
            ) : (
              <div className="newAddressCont">
                <div className="blue">ADD A NEW ADDRESS</div>
                <div className="location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    class="da7+UC"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h16v16H0z"></path>
                      <path
                        class=""
                        fill="#fff"
                        d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"
                      ></path>
                    </g>
                  </svg>
                  Use my current location
                </div>
                <div className="addressInputCont">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="10-digit mobile number" />
                </div>
                <div className="addressInputCont">
                  <input type="text" placeholder="Pincode" />
                  <input type="text" placeholder="Locality" />
                </div>
                <div className="addressInputCont">
                  <textarea placeholder="Address (Area and Street)" />
                </div>
                <div className="addressInputCont">
                  <input type="text" placeholder="City/District/Town" />
                  <input type="text" placeholder="State" />
                </div>
                <div className="addressInputCont">
                  <input type="text" placeholder="Landmark (Optional)" />
                  <input type="text" placeholder="Alternate Phone (Optional)" />
                </div>
                <div className="button">
                  <div className="saveBtn">SAVE</div>
                  <div
                    className="cancelBtn"
                    onClick={() => setNewAddress(false)}
                  >
                    CANCEL
                  </div>
                </div>
              </div>
            )}
            <div className="addedAddress">
              <div className="addedAddressUpperBox">
                <div className="homeBox2">HOME</div>
                <div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgNCAxNiI+CiAgICA8ZyBmaWxsPSIjODc4Nzg3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMiIgY3k9IjgiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyIiBjeT0iMTQiIHI9IjIiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </div>
              </div>

              <div className="bold">Priyanshi Chouhan &nbsp; 9837436734</div>
              <div>
                582, Dutt Nagar, Rajendra Nagar, Indore, Madhya Pradesh - 452012
              </div>
            </div>
          </>
        )}

        {display === "pan" && (
          <>
            <div className="myWishList">
              <p>PAN Card Information</p>
            </div>

            <div className="panCardInputCont">
              <input type="text" placeholder="PAN Card Number" />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="panCardPhoto">
              <span className="grey" style={{ fontSize: "10px" }}>
                Upload PAN Card (Only JPEG file is allowed)
              </span>
              <input type="file" placeholder="Choose File" />
            </div>
            <div className="panCardCheckBox">
              <div>
                <input type="checkbox" name="" id="" checked/>
              </div>
              <p>
                I do hereby declare that PAN furnished/stated above is correct
                and belongs to me, registered as an account holder with
                www.flipkart.com. I further declare that I shall solely be held
                responsible for the consequences, in case of any false PAN
                declaration.
              </p>
            </div>
            <div className="uploadBtn">UPLOAD</div>
            <div className="panCardTerms">
              Read Terms & Conditions of PAN Card Information
            </div>
          </>
        )}

        {display === "coupons" && (
          <>
            <div className="myWishList couponHeading">
              <p>Available Coupons</p>
            </div>
            <div className="coupon">
              <div className="couponUpperCont">
                <span className="green bold">Grab upto 25% off</span>
                <span className="bold grey">Valid till 31 Aug, 2024</span>
              </div>
              <div className="couponLowerCont">
                <p>
                  Get extra 25% off on 10 item(s) (price inclusive of
                  cashback/coupon)
                </p>
                <p className="blue">View T&C</p>
              </div>
            </div>
            <div className="coupon">
              <div className="couponUpperCont">
                <span className="green bold">Grab upto 20% off</span>
                <span className="bold grey">Valid till 31 Aug, 2024</span>
              </div>
              <div className="couponLowerCont">
                <p>
                  Get extra 20% off on 10 item(s) (price inclusive of
                  cashback/coupon)
                </p>
                <p className="blue">View T&C</p>
              </div>
            </div>
            <div className="coupon">
              <div className="couponUpperCont">
                <span className="green bold">Grab upto 15% off</span>
                <span className="bold grey">Valid till 31 Aug, 2024</span>
              </div>
              <div className="couponLowerCont">
                <p>
                  Get extra 15% off on 10 item(s) (price inclusive of
                  cashback/coupon)
                </p>
                <p className="blue">View T&C</p>
              </div>
            </div>
            <div className="coupon">
              <div className="couponUpperCont">
                <span className="green bold">Extra &#8377;5000 Off </span>
                <span className="bold grey">Valid till 31 Aug, 2024</span>
              </div>
              <div className="couponLowerCont">
                <p>
                  Get extra &#8377;500 off on 1 item(s) (price inclusive of
                  cashback/coupon)
                </p>
                <p className="blue">View T&C</p>
              </div>
            </div>
            <div className="coupon">
              <div className="couponUpperCont">
                <span className="green bold">Grab upto 8% off</span>
                <span className="bold grey">Valid till 31 Aug, 2024</span>
              </div>
              <div className="couponLowerCont">
                <p>
                  Get extra 8% off on 10 item(s) (price inclusive of
                  cashback/coupon)
                </p>
                <p className="blue">View T&C</p>
              </div>
            </div>
            <div className="coupon">
              <div className="couponUpperCont">
                <span className="green bold">Grab upto 7% off</span>
                <span className="bold grey">Valid till 31 Aug, 2024</span>
              </div>
              <div className="couponLowerCont">
                <p>
                  Get extra 7% off on 10 item(s) (price inclusive of
                  cashback/coupon)
                </p>
                <p className="blue">View T&C</p>
              </div>
            </div>
            <div className="coupon" style={{ marginBottom: "40px" }}>
              <div className="couponUpperCont">
                <span className="green bold">Grab upto 5% off</span>
                <span className="bold grey">Valid till 31 Aug, 2024</span>
              </div>
              <div className="couponLowerCont">
                <p>
                  Get extra 5% off on 1 item(s) (price inclusive of
                  cashback/coupon)
                </p>
                <p className="blue">View T&C</p>
              </div>
            </div>
          </>
        )}

        {
           display==="cards" && (
            <>
            <div className="myWishList couponHeading">
            <p>Manage Saved Cards</p>
          </div>
          <div className="faqCont">
            <span className="bold" style={{fontSize:"18px", marginBottom:"10px"}}>FAQ</span>
            <p className="bold">Why is my card being tokenised?</p>
            <p>As per the new RBI guidelines to make card data more secure, merchants like Flipkart cannot store the card details of users. As an alternative, RBI has authorised card networks and card issuers to offer card tokenisation services, which means the replacement of actual credit and debit card details with an alternate code called “token”. The user can either choose to tokenise their card by giving consent for future transactions or choose to continue without tokenisation.</p>

            <p className="bold">What is token?</p>
            <p>A token is generated when a user gives consent to Flipkart to tokenise their card. A token is a unique value for a combination of card, token requestor (Flipkart is a token requestor & accepts request from the customer for tokenisation of a card and passes it onto the card network to issue a corresponding token) and device. The token does not contain any personal information linked to your card and is generated only when a customer uses a new card for a successful transaction on Flipkart.</p>

            <p className="bold">Is it safe to tokenise my card?</p>
            <p>Yes. A tokenised card transaction is considered safer as the actual card details are not shared with the Flipkart during transaction processing . Card information is stored with the authorised card networks or card issuers only and Flipkart does not store your 16-digit card number.</p>

            <p className="bold">Is tokenisation of card mandatory?</p>
            <p>No, customer can choose whether or not to tokenise their card.</p>

            <p className="bold">What happens if I don’t give consent to secure my card?</p>
            <p>If you don’t give consent to tokenise your card, you need to enter your card details for every transaction as stipulated under the RBI guidelines.</p>

            <p className="blue">View all FAQs &nbsp;
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPjEwMzc0NDBFLTZGNDYtNDc5MS1CRkUxLTczQzczMEI2RTU0NTwvdGl0bGU+PHBhdGggZD0iTTEuMiAxTDQgNSAxIDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSIjMDI3Q0Q1IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="" />
            </p>
          </div>

          </>
           )
        }
        
      </div>
    </div>
  );
}

export default WishList;

import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-upperContainer">
        <div className="footer-left">
          <div className="footer-columns">
            <p className="grey">ABOUT</p>
            <div className="list">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </div>
          </div>
          
          <div className="footer-columns">
            <p className="grey">GROUP COMPANIES</p>
            <div className="list">
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </div>
          </div>

          <div className="footer-columns">
            <p className="grey">HELP</p>
            <div className="list">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </div>
          </div>

          <div className="footer-columns">
            <p className="grey">CONSUMER POLICY</p>
            <div className="list">
              <li>Cancellation & Returns</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>ERP Compliance</li>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-columns">
            <p className="grey">Mail Us: </p>
            <div className="list address">
              <li>Flipkart Internet Private Limited,</li>
              <li>Buildings Alyssa, Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road, Devarabeesanahalli, Village,</li>
              <li>Bengaluru, 560103,</li>
              <li>Karnataka, India</li>
            </div>
            <div className="icons-container">
              <p className="grey"> Social:</p>
              <div className="footer-icons">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                  alt=""
                />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                  alt=""
                />
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="footer-columns">
            <p className="grey">Registered Office Address:</p>
            <div className="list address">
              <li>Flipkart Internet Private Limited,</li>
              <li>Buildings Alyssa, Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road, Devarabeesanahalli, Village,</li>
              <li>Bengaluru, 560103,</li>
              <li>Karnataka, India</li>
              <li>CIN: GHFTFGH67NNJNJ67665</li>
              <li>Telephone: 044-45614700 / 044-67415800</li>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lowerContainer">
        <div className="lowerContainer-box">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
            alt=""
          />
          <span>Become a Seller</span>
        </div>
        <div className="lowerContainer-box">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
            alt=""
          />
          <span>Advertise</span>
        </div>
        <div className="lowerContainer-box">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
            alt=""
          />
          <span>Gift Cards</span>
        </div>
        <div className="lowerContainer-box">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
            alt=""
          />
          <span>Help Center</span>
        </div>
        <div>
          <span> &#169; 2007-2024 Flipkart.com</span>
        </div>
        <div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Footer;

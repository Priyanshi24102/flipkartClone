import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [otp, setOtp] = useState(false);
  const [inputErr,setInputErr]=useState(false);
  const [input, setInput] = useState(""); 
  const navigate=useNavigate();
  const [otpValue, setOtpValue] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: ""
  });

 
  const handleLogin = () => {
    if(input!==""){
        setOtp(true);
        setInputErr(false);
       
    }
    else{
        setInputErr(true);
    }
    
  };


  const handleVerify = () => {
    console.log(localStorage.getItem("isLoggedIn"));
    if(otpValue[1]==="1" && otpValue[2]==='2' && otpValue[3]==='3' && otpValue[4]==='4' && otpValue[5]==='5' && otpValue[6]==='6'){
      localStorage.setItem("user", JSON.stringify(input)); 
      localStorage.setItem("isLoggedIn",true); 
      navigate("/");
    }  
};

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <div className="loginImage">
          <h3 className="bold">Login</h3>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="loginText">
          {!otp ? (
           
            <>
              <div className="loginUpperText">
                <input
                  type="text"
                  inputMode="numeric"
                  max="9"
                  min="0"
                  placeholder="Enter Email/Mobile Number"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                />
                {inputErr && <p className="error">Please enter mobile number/email</p>}
                <div className="loginInnerText">
                  <p>
                    By continuing, you agree to Flipkart's{" "}
                    <span className="blue">Terms of Use</span> and{" "}
                    <span className="blue">Privacy Policy.</span>{" "}
                  </p>
                  <button onClick={handleLogin}>Request OTP</button>
                </div>
              </div>
              <div className="loginLowerText">
                <span>New to Flipkart? Create an account</span>
              </div>
            </>
          ) : (
           
            <>
              <div className="loginUpperText">
                <div className="otpPara">
                  <span>Please enter the OTP sent to </span>
                  <span>{input} <span className="blue">Change</span></span>
                  
                </div>
                <div className="inputs">
                
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <input
                      key={index}
                      type="text"
                      value={otpValue[index]}
                      onChange={(e) =>
                        setOtpValue({
                          ...otpValue,
                          [index]: e.target.value
                        })
                      }
                    />
                  ))}
                </div>
                <div className="verifyBtn" onClick={handleVerify}>
                  Verify
                </div>
                <p className="small grey">
                  Not Received your code?{" "}
                  <span className="blue">Resend Code</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

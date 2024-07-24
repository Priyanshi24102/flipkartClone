import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductsPage from "./Components/ProductsPage";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import { useEffect } from "react";
import WishList from "./Components/WishList";

function App() {
  useEffect(()=>{
      localStorage.setItem("isLoggedIn",false);
  },[])
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductsPage" element={<ProductsPage/>}/>
        <Route path="/Product" element={<ProductDetails/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login/>}/>
         <Route path="/WishList" element={<WishList/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      

    
    </div>
  );
}

export default App;

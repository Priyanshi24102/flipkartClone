// import '.\src\App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./Components/Login";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import Carousels from "./Carousels";
import CardContainer from "./CardContainer";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {/* <Login/> */}

      <Categories />
      <Carousels />

      {categories.map((category) => (
        <CardContainer category={category} />
      ))}

      {/* <Footer /> */}
    </div>
  );
}

export default Home;

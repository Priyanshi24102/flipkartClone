import "./App.css";
import Carousels from "./Components/Carousels";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import CardContainer from "./Components/CardContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Carousels />
      <CardContainer />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;

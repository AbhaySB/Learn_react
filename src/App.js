// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/CardsContainer";

let name = "Abhay";
function App() {
  return (
    <div>
      <Nav />
      <br />
      <div className="container">
        <div className="rounded-pill p-3 mb-2 bg-secondary text-light fst-italic text-uppercase fw-bold text-center">
          We brings a complete range of bikes in India. Search bikes by applying
          filters such as by price range, and more features
        </div>
      </div>
      <Cards />
      <br />
    </div>
  );
}

export default App;

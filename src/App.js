// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/CardsContainer";
import Posts from "./components/Posts";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(true);
  const [dark, toogleDark] = useState(false)
  return (
    <div id="abhay" className={dark&&("dark")}>
      <Nav dark={dark}/>
      <br />
      { page ? <BikePage /> : <BlogPage/>}
    </div>
  );

  function BikePage() {
    return (
      <>
        <div className="container text-center">
          <button type="button" className="btn btn-success" onClick={()=>setPage(false)}>
            Blogs
          </button>
          <div className="rounded-pill p-3 mb-2 bg-secondary text-light fst-italic text-uppercase fw-bold text-center m-1">
            We brings a complete range of bikes in India. Search bikes by
            applying filters such as by price range, and more features
          </div>
        </div>
        <Cards />
        <br />
      </>
    );
  }

  function BlogPage() {
    return (
      <>
        <div className="container text-center">
          <button type="button" className="btn btn-success" onClick={()=>setPage(true)}>
            Bikes
          </button>
          <br />
          <h1>This is the Blog page</h1>
          <Posts/>
        </div>
      </>
    );
  }
}

export default App;

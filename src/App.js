// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav"
import Card from "./components/Card"

let name = "Abhay";
function App() {
  return (
    <div>
      <Nav/>
      <br />
      <div className="container">
        <div className="rounded-pill p-3 mb-2 bg-light text-dark fst-italic fs-6 ">
          We brings a complete range of bikes in India. Search bikes by applying
          filters such as by price range, and more features.
        </div>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
        <Card name = "Ducati panigale v4s" speed = {299} power = {1100} to = "124 Nm @ 9,500 rpm" noc = {4} weight = {195} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <Card name = "Kawasaki Ninja H2R" speed = {299} power = {1100} to = "124 Nm @ 9,500 rpm" noc = {4} weight = {200} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <Card name = "zx10r" speed = {280} power = {1000} to = "100 Nm @ 8,500 rpm" noc = {4} weight = {180} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <Card name = "Z1000" speed = {250} power = {1000} to = "100 Nm @ 8,500 rpm" noc = {4} weight = {170} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        
      </div>
    </div>
  );
}

export default App;

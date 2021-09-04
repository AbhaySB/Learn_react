import React from "react";

export default function Card(props) {
  return (
    <div class="card mx-2 border border-dark" style={{ width: "22rem" }}>
      <img src={props.imglink} class="card-img-top mt-2 rounded" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" style={{ width: "12em" }}>TOP SPEED</li>
          <li class="list-group-item" style={{ width: "6rem" }}>{props.speed} km/h</li>
        </ul>
        <ul class="list-group list-group-horizontal-sm">
          <li class="list-group-item" style={{ width: "12rem" }}>Displacement</li>
          <li class="list-group-item" style={{ width: "6rem" }}>{props.power}cc</li>
        </ul>
        <ul class="list-group list-group-horizontal-md">
          
          <li class="list-group-item" style={{ width: "18rem" }}>Torque</li>
          <li class="list-group-item .d-flex" style={{ width: "10rem" }} >{props.to}</li>
        </ul>
        <ul class="list-group list-group-horizontal-lg">
          <li class="list-group-item" style={{ width: "12rem" }}>Number of Cylinders</li>
          <li class="list-group-item" style={{ width: "6rem" }}>{props.noc}</li>
        </ul>
        <ul class="list-group list-group-horizontal-xl">
          <li class="list-group-item" style={{ width: "12rem" }}>Kerb/Wet Weight</li>
          <li class="list-group-item" style={{ width: "6rem" }}>{props.weight}kg</li>
        </ul>
        <br />
        <button onClick={() => props.show()} class="btn btn-success mx-1 border border-dark"> 
          BUY NOW
        </button>
        <button onClick={() => props.show(
         <div class="mb-3">
         <label for="exampleFormControlTextarea1" class="form-label"><img src={props.logo} class="card-img-top mt-2 rounded" alt="..." /></label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" style={{ width: "30rem" }}>The power and the ride comfort this bike gives is just amazing. You will always feel to just take it to maximum power. If you've been waiting to get the best sports bike, this bike will be the best, the engine sounds soo refined that you will love to give rev to it, the sitting position is well planned by the company, Balanced power, ABS system works soo smooth so that you don't have to worry about your safety will riding gear shifts are good and handlamps look so attractive.</textarea>
       </div>
        )} class="btn btn-primary border border-dark">
          View Details
        </button>
      </div>
      
    </div>
  );
}

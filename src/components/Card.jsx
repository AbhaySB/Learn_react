import React from "react";

export default function Card(props) {
  return (
    <div class="card mx-2 border border-dark" style={{ width: "18rem" }}>
      <img src={props.imglink} class="card-img-top mt-2 rounded" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">TOP SPEED</li>
          <li class="list-group-item">{props.speed} km/h</li>
        </ul>
        <ul class="list-group list-group-horizontal-sm">
          <li class="list-group-item">Displacement</li>
          <li class="list-group-item">{props.power}cc</li>
        </ul>
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">Torque</li>
          <li class="list-group-item">{props.to}</li>
        </ul>
        <ul class="list-group list-group-horizontal-lg">
          <li class="list-group-item">Number of Cylinders</li>
          <li class="list-group-item">{props.noc}</li>
        </ul>
        <ul class="list-group list-group-horizontal-xl">
          <li class="list-group-item">Kerb/Wet Weight</li>
          <li class="list-group-item">{props.weight}kg</li>
        </ul>
        <br />
        <a href="#" class="btn btn-success mx-1 border border-dark">
          BUY NOW
        </a>
        <a href="#" class="btn btn-primary border border-dark">
          View Details
        </a>
      </div>
    </div>
  );
}

import React from "react";
import "./Superhero.css";

export default function Superhero(props) {
  return (
    <div className="cardUn">
      <h2>{props.nom}</h2>
      <img src={props.img} alt={props.nom} />
      <p>{props.description}</p>
    </div>
  );
}

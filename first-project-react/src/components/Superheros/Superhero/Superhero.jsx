import React from "react";
import "./Superhero.css";

export default function Superhero({
  nom,
  description,
  films = ["Aucun film"],
  ...props
}) {
  return (
    <div className="superhero">
      <h2>{nom}</h2>
      <p>{description}</p>
      <ul>
        {films.map((film) => (
          <li>{film}</li>
        ))}
      </ul>
    </div>
  );
}

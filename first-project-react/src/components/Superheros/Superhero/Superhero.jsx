import React from "react";
import "./Superhero.css";
// import profil from ;

export default function Superhero({
  nom,
  description,
  films = ["Aucun film"],
  photo = "../../../../public/profil.jpeg",
  // ...props
}) {
  return (
    <div className="superhero">
      <img src={photo} alt={`${nom} photo`} />
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

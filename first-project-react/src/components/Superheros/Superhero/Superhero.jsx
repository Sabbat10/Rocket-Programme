import React from "react";
import { useState } from "react";
import "./Superhero.css";
// import profil from ;

export default function Superhero({
  nom,
  description,
  films = ["Aucun film"],
  photo = "../../../../public/profil.jpeg",
  // // ...props
  details,
  ...props
}) {
  // variable
  const [contenu, setContenu] = useState();

  return (
    <div className="superhero">
      {/* card */}
      <img src={photo} alt={`${nom} photo`} />
      <h2>{nom}</h2>
      <p>{description}</p>
      <div className="read-more" onClick={() => setContenu(details)}>
        En savoir plus
      </div>
      {/* details */}
      <div
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {contenu}
      </div>
      {/* films */}
      <ul>
        {films.map((film) => (
          <li>{film}</li>
        ))}
      </ul>
    </div>
  );
}

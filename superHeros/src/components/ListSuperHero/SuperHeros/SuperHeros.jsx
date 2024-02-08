import React from "react";
import "./SuperHeros.css";

export default function SuperHeros({
  nom,
  description,
  lien,
  films = ["Aucun film"],
  photo,
  ...props
}) {
  return (
    <div>
      <div className="superHero">
        <img src={photo} alt={nom} />
        <h2 className=" m-2 text-2xl ">
          {" "}
          <a
            className="text-blue-700 hover:underline hover:text-tomato-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            href={lien}
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measures for external links
          >
            {nom}
          </a>
        </h2>
        <p>{description}</p>

        <br />
        <b>Film :</b>
        <ol>
          {films.map((film) => (
            <li key={film}>
              <i>{film}</i>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

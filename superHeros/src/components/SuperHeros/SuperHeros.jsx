import React from "react";
import "./SuperHeros.css";

export default function SuperHeros(props) {
  return (
    <div>
      <div className="superHero">
        <h2 className=" m-2 text-2xl ">{props.nom}</h2>
        <p>{props.description}</p>
        <br />
        <a
          className="text-blue-700 hover:underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          href={props.lien}
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measures for external links
        >
          {props.nom}
        </a>
      </div>
    </div>
  );
}

import React from "react";

// style
import "./Superheros.css";

//composant
import Superhero from "./Superhero/Superhero";

export default function Superheros({ children }) {
  return (
    <div>
      <div className="card">
        <Superhero>{children}</Superhero>
      </div>
    </div>
  );
}

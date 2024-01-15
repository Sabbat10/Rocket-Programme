import React from "react";
import Superhero from "./Superhero/Superhero";
import "./Superheros.css";

export default function Superheros({ children }) {
  return <div className="marvel">{children}</div>;
}

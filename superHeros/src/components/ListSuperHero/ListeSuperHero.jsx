import React from "react";
import SuperHeros from "./SuperHeros/SuperHeros";

export default function ListeSuperHero({ children }) {
  return (
    <div>
      <div className="flex flex-5">{children}</div>
    </div>
  );
}

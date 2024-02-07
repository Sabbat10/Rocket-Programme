import React from "react";
import SuperHeros from "./components/SuperHeros/SuperHeros";

import "./App.css";

export default function App() {
  return (
    <div>
      <h1 className="text-center text-3xl text-black-700">Marvel</h1>

      <div className="flex flex-5">
        {/* Super héros numéro 1 */}
        <SuperHeros
          nom="Iron Man"
          description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant
          dans l'univers Marvel de la maison d'édition Marvel Comics. Wikipédia"
          lien=""
        />

        {/* Super héros numéro 2 */}
        <SuperHeros
          nom="Loki"
          description="Anth  Appartenant aux groupes des Aesir, Loki est le dieu de la malice, de
          la discorde et des illusions"
          lien=""
        />

        {/* Super héros numéro 3 */}
        <SuperHeros
          nom="Captain America"
          description="Steven « Steve » Rogers, alias Captain America est un super-héros
          évoluant dans l'univers Marvel de la maison d'édition Marvel Comics.
          Wikipédia"
          lien="https://en.wikipedia.org/wiki/Captain_America"
        />
      </div>
    </div>
  );
}

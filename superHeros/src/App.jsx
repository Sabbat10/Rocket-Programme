import React from "react";
import SuperHeros from "./components/ListSuperHero/SuperHeros/SuperHeros";
import "./App.css";
import ListeSuperHero from "./components/ListSuperHero/ListeSuperHero";
// images
import ironMan from "../src/assets/images.jpeg";
import loki from "../src/assets/loki.jpeg";
import captain from "../src/assets/captaine.jpeg";

export default function App() {
  return (
    <div>
      <h1 className="text-center text-3xl text-black-700">Marvel</h1>
      <ListeSuperHero>
        {/* Super héros numéro 1 */}
        <SuperHeros
          nom="Iron Man"
          description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant
          dans l'univers Marvel de la maison d'édition Marvel Comics. Wikipédia"
          lien="https://en.wikipedia.org/wiki/Iron_Man"
          details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          films={["iron Man 1", "Iron Man 2", "Iron Man 3"]}
          photo={ironMan}
        />

        {/* Super héros numéro 2 */}
        <SuperHeros
          nom="Loki"
          description="Anth  Appartenant aux groupes des Aesir, Loki est le dieu de la malice, de
          la discorde et des illusions"
          details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          lien="https://en.wikipedia.org/wiki/Loki"
          films={["Casa de papel", "Prison breack", "The doctor"]}
          photo={loki}
        />

        {/* Super héros numéro 3 */}
        <SuperHeros
          nom="Captain America"
          description="Steven « Steve » Rogers, alias Captain America est un super-héros
          évoluant dans l'univers Marvel de la maison d'édition Marvel Comics.
          Wikipédia"
          details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          lien="https://en.wikipedia.org/wiki/Captain_America"
          photo={captain}
        />
      </ListeSuperHero>
    </div>
  );
}

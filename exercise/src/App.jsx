import React from "react";
import "./App.css";
import Superheros from "./components/Superheros/Superheros";
import Superhero from "./components/Superheros/Superhero/Superhero";

//images
import professeur from "../public/téléchargement.jpeg";
import berlin from "../public/merlin.jpeg";
import tokio from "../public/Tokio.jpeg";

export default function App() {
  return (
    <div>
      <h1>Casa de Papel</h1>
      <Superheros>
        <Superhero
          nom={"EL Professor"}
          img={professeur}
          description={
            "Le Professeur, également connu sous le nom de Sergio Marquina, est l'un des personnages principaux de la série La Casa de Papel. Il est le cerveau derrière les braquages et est connu pour sa grande intelligence et sa capacité à anticiper les événements. Son personnage est interprété par l'acteur Álvaro Morte."
          }
        />

        <Superhero
          nom={"Berlin"}
          img={berlin}
          description={
            "Le personnage de Berlin  dans la série La Casa de Papel est interprété par lacteur Pedro Alonso. Berlin est l un des membres principaux de l équipe qui planifie le braquage de Monnaie royale d' Espagne. Il est connu pour son charisme, son intelligence et son leadership au sein du groupe. Berlin est un personnage complexe qui suscite à la fois admiration et controverse parmi les fans de la série."
          }
        />

        <Superhero
          nom={"Tokyo"}
          img={tokio}
          description={
            "La Casa de Papel, également connue sous le titre Money Heist en anglais, est une série télévisée espagnole. Tokyo est l'un des personnages principaux de la série, interprété par l'actrice Úrsula Corberó. Elle est une braqueuse talentueuse et fait partie du groupe menant le braquage de la Monnaie royale d'Espagne. La série a connu un grand succès international depuis sa diffusion sur Netflix."
          }
        />
      </Superheros>
    </div>
  );
}

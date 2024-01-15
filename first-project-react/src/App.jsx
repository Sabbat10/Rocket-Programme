import React from "react";
import Superheros from "./components/Superheros/Superheros";
import Superhero from "./components/Superheros/Superhero/Superhero";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Marvel</h1>
      <Superheros>
        {/* Superhero numéro 1 */}
        <Superhero
          nom="Iron Man"
          description="Alors qu'il fait l'essai d'une arme de son invention en Afghanistan, le milliardaire Tony Stark est capturé par des insurgés qui le forcent à travailler pour eux. Mais à leur insu, le scientifique crée pour lui-même une armure superpuissante au moyen de laquelle il s'évade et rentre aux États-Unis."
          films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]}
        />

        {/* Superhero numéro 2 */}
        <Superhero
          nom="Loki"
          description="Dans une réalité alternative, Loki s'est échappé avec le Tesseract. Après son évasion, il est emmené auprès du Tribunal des Variations Anachroniques, un organisme qui agit pour arrêter toute personne qui tenterait d'altérer l'éternel flux temporel."
        />

        {/* Superhero numéro 3 */}
        <Superhero
          nom="Capitain America"
          description="Le film raconte l'histoire de Steve Rogers, un jeune homme frêle de Brooklyn transformé en un super-soldat nommé Captain America durant la Seconde Guerre .."
        />
      </Superheros>
    </div>
  );
}

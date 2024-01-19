import React, { Children } from "react";
import Superheros from "./components/Superheros/Superheros";
import Superhero from "./components/Superheros/Superhero/Superhero";
import "./App.css";
import iromMan from "../public/iron man.jpg";
import loki from "../public/loki.jpeg";
import capitaineAmerica from "../public/captain-america.webp";

export default function App() {
  return (
    <div>
      <h1>Marvel</h1>
      <Superheros>
        {/* Superhero numéro 1 */}
        <Superhero
          nom="Iron Man"
          description="Alors qu'il fait l'essai d'une arme de son invention en Afghanistan, le milliardaire Tony Stark est capturé par des insurgés qui le forcent à travailler pour eux. Mais à leur insu, le scientifique crée pour lui-même une armure superpuissante au moyen de laquelle il s'évade et rentre aux États-Unis."
          details="Iron Man est un film américano-canadien réalisé par Jon Favreau, sorti en 2008.

          Il raconte les origines et les débuts du personnage éponyme issu du comics publié par Marvel. Il s'agit de la première production de l'univers cinématographique Marvel, et du premier film de la phase une.
          
          Ce film marque aussi le retour au succès au box-office de Robert Downey Jr., qui connaît grâce à ce rôle un regain de popularité. Le film récolte effectivement 585 millions de dollars pour un budget de 140 millions et sera suivi en 2010 d'Iron Man 2.
          
          En 2022, le film est sélectionné par la National Film Registry de la Bibliothèque du Congrès pour y être conservé, comme étant « culturellement, historiquement ou esthétiquement important »1."
          films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]}
          // photo={iromMan}
        />

        {/* Superhero numéro 2 */}
        <Superhero
          nom="Loki"
          description="Dans une réalité alternative, Loki s'est échappé avec le Tesseract. Après son évasion, il est emmené auprès du Tribunal des Variations Anachroniques, un organisme qui agit pour arrêter toute personne qui tenterait d'altérer l'éternel flux temporel."
          details="Loki, également connu sous le nom de Loptr, Hveðrungr ou encore Loge (dans la tétralogie de Wagner), est un des dieux principaux du panthéon de la mythologie nordique.

          Appartenant aux groupes des Aesir, Loki est le dieu de la malice, de la discorde et des illusions.
          
          Il est le fils du géant Farbauti et de Laufey, ainsi que le père de plusieurs monstres : le serpent Jörmungand, le loup Fenrir et la déesse du monde des morts Hel. Il est également la mère du cheval d'Odin à huit jambes Sleipnir. Malgré ses origines, il est accueilli dans le panthéon divin des Ases par Odin."
          photo={loki}
        />

        {/* Superhero numéro 3 */}
        <Superhero
          nom="Capitain America"
          description="Le film raconte l'histoire de Steve Rogers, un jeune homme frêle de Brooklyn transformé en un super-soldat nommé Captain America durant la Seconde Guerre .."
          details="Captain America : Le Soldat de l'hiver ou Capitaine America : Le Soldat de l'hiver au Québec (Captain America: The Winter Soldier) est un film de super-héros américain réalisé par Anthony et Joe Russo, sorti en 2014.

          Il est la 9e production l'univers cinématographique Marvel et fait partie de la phase deux. Le film raconte la suite de l'histoire de Steve RogersNote 1, un jeune homme frêle de Brooklyn transformé en un super-soldat nommé Captain America1,2,3,4."
          photo={capitaineAmerica}
        />
      </Superheros>
    </div>
  );
}

import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const { name, hp, sprites } = pokemon;
  const { front, back } = sprites;
  const [flipped, setFlipped] = useState(true);
const pokeCard = flipped? front : back;


function handleFlip()
{
  setFlipped(!flipped);
};


  return (
    <Card onClick={handleFlip}>
      <div>
        <div className="image">
          <img alt="oh no!" src={pokeCard}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

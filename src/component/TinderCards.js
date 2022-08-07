import React from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {
  const [waifus, setWaifus] = React.useState([
    {
      name: "Mai Sakurajima",
      url: "https://cdn.myanimelist.net/images/characters/2/366639.jpg",
    },
    {
      name: "Zero Two",
      url: "https://cdn.myanimelist.net/images/characters/10/352557.jpg",
    },
    {
      name: "Esdeath",
      url: "https://cdn.myanimelist.net/images/characters/12/265641.jpg",
    },
    {
      name: "Rem",
      url: "https://cdn.myanimelist.net/images/characters/16/306391.jpg",
    },
  ]);

  return (
    <div className='card-container'>
      {
        waifus.map( waifu => (
        <TinderCard
        className="swipe"
        key={waifu.name}
        preventSwipe={['up', 'down']}
        >
          <div 
            style={ { backgroundImage: `url(${waifu.url})` }} 
            className="card"
            >
            <h2>{waifu.name}</h2>
          </div>
        </TinderCard>
      ))
      }
    </div>
  );
}

export default TinderCards;

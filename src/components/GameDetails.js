import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function GameDetails({ dataGame }) {
  console.log(dataGame);
  const params = useParams();
  const gameId = params.id;

  return (
    <div className='detail-cont'>
      {dataGame
        .filter((game) => game.id === Number(gameId))
        .map((game) => {
          return (
            <div className='detail-card'>
              <Link className='return' to='/'>
                x
              </Link>
              <h3>{game.name}</h3>
              <p>{game.released}</p>
              <p>{game.slug}</p>
              <video width='85%' height='auto' controls>
                <source src={game.clip.clip} />
              </video>
              <div>
                <img className='bg-img' src={game.background_image} alt='' />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default GameDetails;

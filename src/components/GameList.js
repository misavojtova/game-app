import React, { useState } from "react";
import Game from "./Game";

function GameList({ dataGame, deleteCard }) {
  const [showHighRate, setShowHighRate] = useState(false);

  return (
    <>
      <button
        className='btn m'
        onClick={() => {
          setShowHighRate(!showHighRate);
        }}
      >
        Show Games with rating above 4.5
      </button>
      <div className='games-wrap'>
        {dataGame
          .filter((game) => !showHighRate || game.rating > 4.5)
          .map((game) => {
            return (
              <Game
                deleteCard={deleteCard}
                id={game.id}
                key={game.id}
                name={game.name}
                img={game.background_image}
                rate={game.rating}
                release={game.released}
              />
            );
          })}
      </div>
    </>
  );
}

export default GameList;

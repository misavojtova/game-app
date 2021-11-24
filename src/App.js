import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";

function App() {
  const [dataGame, setDataGame] = useState([]);

  async function fetchGame() {
    const resp = await fetch("https://wild-games.jsrover.wilders.dev/games");
    const data = await resp.json();
    if (data !== null) {
      setDataGame(data);
    }
  }
  useEffect(() => {
    fetchGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function deleteCard(id) {
    setDataGame(dataGame.filter((game) => game.id !== id));
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <GameList deleteCard={deleteCard} dataGame={dataGame} />
              {/* <Header /> */}
            </div>
          }
        />
        <Route
          path='/games/:id'
          element={<GameDetails dataGame={dataGame} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

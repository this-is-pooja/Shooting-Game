import './App.css';
import React, { useState } from "react";

function App() {
  const [GameNo, setGameNo] = useState(0);
  const [Won_1, setWon_1] = useState(0);
  const [Won_2, setWon_2] = useState(0);
  const [GameOver, setGameOver] = useState(false);

  const shoot = () => {    
    let player1_health = 100;
    let player2_health = 100;
    let shoot1_player = 0;
    let shoot2_player = 0;

    if (Won_1 >= 2 || Won_2 >= 2) {
      setGameOver(true);
    }
    while (player1_health >= 0 && player2_health >= 0) {
      shoot1_player = Math.floor(Math.random() * 6);
      shoot2_player = Math.floor(Math.random() * 6);
      player1_health -= shoot1_player;
      player2_health -= shoot2_player;
      }
      if (player1_health <= 0) {
        setWon_2(Won_2 + 1)
      } else {
        setWon_1(Won_1 + 1);
      }
    setGameNo(GameNo + 1);
  }
  const reset = () => {
    setGameNo(0);
    setWon_1(0);
    setWon_2(0);
    setGameOver(false);
  }
  return (
    <div className="App">
      <h1>2 Player Shooting Game</h1>
      <h2>Game {GameNo}</h2>
      <button onClick={() => { GameOver ? reset() : shoot() }}>
        {GameOver ? "reset" : "Start Game"}
      </button>
      {
        GameNo?(
          <>
          <p>player 1-won:{Won_1}</p>
          <p>player 2-won:{Won_2}</p>
          </>
        ):null
      }
      {
        GameOver && (
          <p>player {Won_1>=3?1:2} won the match!</p>
        )
      }
    </div>
  );
}

export default App;

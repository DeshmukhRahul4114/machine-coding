import React, { useState } from 'react';
import './SnakeAndLadder.css'; // Optional for CSS styling

const boardSize = 100; // 10x10 board
const ladders = {
  2: 23,  // Ladder from 2 to 23
  8: 34,  // Ladder from 8 to 34
  20: 77, // Ladder from 20 to 77
  32: 68, // Ladder from 32 to 68
};
const snakes = {
  28: 14,  // Snake from 28 to 14
  37: 17,  // Snake from 37 to 17
  56: 47,  // Snake from 56 to 47
  88: 24,  // Snake from 88 to 24
};

function SnakeAndLadder() {
  const [players, setPlayers] = useState([1, 1]); // Starting positions for both players
  const [diceRoll, setDiceRoll] = useState(0);
  const [message, setMessage] = useState('Roll the dice to start!');
  const [currentPlayer, setCurrentPlayer] = useState(0); // 0 for Player 1, 1 for Player 2

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1; // Dice roll between 1 and 6
    setDiceRoll(roll);

    let newPosition = players[currentPlayer] + roll;
    if (newPosition > boardSize) {
      setMessage(`Player ${currentPlayer + 1} rolled ${roll}, but can't move beyond 100.`);
    } else {
      // Check for ladders
      if (ladders[newPosition]) {
        setMessage(`Player ${currentPlayer + 1} found a ladder! Move up to ${ladders[newPosition]}`);
        newPosition = ladders[newPosition];
      }
      // Check for snakes
      if (snakes[newPosition]) {
        setMessage(`Player ${currentPlayer + 1} hit a snake! Move down to ${snakes[newPosition]}`);
        newPosition = snakes[newPosition];
      }

      const updatedPlayers = [...players];
      updatedPlayers[currentPlayer] = newPosition;

      setPlayers(updatedPlayers);

      // Check if the player has won
      if (newPosition === boardSize) {
        setMessage(`Player ${currentPlayer + 1} wins!`);
      } else {
        setMessage(`Player ${currentPlayer + 1} rolled a ${roll}, move to ${newPosition}`);
        // Switch turn to the other player
        setCurrentPlayer((currentPlayer + 1) % 2);
      }
    }
  };

  return (
     <div className="snake-and-ladder">
       <h3>Snake and Ladder (Two Players)</h3>
      <div className="board">
        {Array.from({ length: 10 }, (_, row) => (
          <div className="row" key={row}>
            {Array.from({ length: 10 }, (_, col) => {
              const isEvenRow = row % 2 === 0;
              const cellNumber = isEvenRow
                ? 100 - (row * 10 + col)
                : 100 - (row * 10 + (9 - col)); // Reverse numbering for odd rows
              
              const playerInCell = players.indexOf(cellNumber) !== -1; // Check if any player is in the cell
              return (
                <div
                  key={cellNumber}
                  className={`cell ${playerInCell ? 'player' : ''}`}
                >
                  {cellNumber}
                  {players[0] === cellNumber && <div className="player-one">P1</div>}
                  {players[1] === cellNumber && <div className="player-two">P2</div>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={rollDice}>Roll Dice</button>
        <p>Dice Roll: {diceRoll}</p>
        <p>{message}</p>
        <p>Player {currentPlayer + 1}'s turn</p>
      </div> 
     </div>
  );
}

export default SnakeAndLadder;

import React, { useEffect, useState } from 'react';
import { Field } from './components/Field';
import { GameLog } from './components/GameLog';
import placeShip from './utils/placeShip';
import { getSet } from './utils/standardShipsSet';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function Game () {
  const [enemyFields, setEnemyFields] = useState({
    player1: Array(10).fill().map((_, x) => Array(10).fill().map((_, y) => ({
      x,
      y,
      containsShip: false,
      shot: false,
      shipId: null,
    }))),
    player2: Array(10).fill().map((_, x) => Array(10).fill().map((_, y) => ({
      x,
      y,
      containsShip: false,
      shot: false,
      shipId: null,
    }))),
  });
  const [enemyShips] = useState({
    player1: [...getSet(randomInteger(0, 4))],
    player2: [...getSet(randomInteger(0, 4))],
  });
  const [gameOver, setGameOver] = useState(false);
  const [logs, setLogs] = useState(['Ожидание хода...']);
  const [currentPlayerIsFirst, setCurrentPlayerIsFirst] = useState(true);

  useEffect(() => {
    enemyShips.player1.forEach(ship => {
      setEnemyFields(placeShip(enemyFields, ship, 'player1'));
    });
    enemyShips.player2.forEach(ship => {
      setEnemyFields(placeShip(enemyFields, ship, 'player2'));
    });
  }, []);

  const handleClick = (x, y) => {
    const currentField = currentPlayerIsFirst ? 'player1' : 'player2';
    const currentPlayerName = currentPlayerIsFirst ? 'Игрок 1' : 'Игрок 2';
  
    if (gameOver || enemyFields[currentField][x][y].shot) {
      return;
    }

    const newFields = [...enemyFields[currentField]];
    newFields[x][y].shot = true;

    setEnemyFields((prevFields) => { return { ...prevFields, [currentField]: newFields }; });
    
    if (newFields[x][y].containsShip) {
      const hittedShip = enemyShips[currentField].find(ship => (ship.id === newFields[x][y].shipId));

      hittedShip.hitpoints--;
      setLogs(prevLogs => [...prevLogs, hittedShip.hitpoints > 0 ? `${currentPlayerName}: Попадание!` : `${currentPlayerName}: Уничтожил корабль!`]);

      if (enemyShips[currentField].every(ship => (ship.hitpoints === 0))) {
        setLogs(prevLogs => [...prevLogs, `Игра окончена. Победил: ${currentPlayerName}`]);
        setGameOver(true);
      }
    } else {
      setLogs(prevLogs => [...prevLogs, `${currentPlayerName}: Мимо!`]);
      setCurrentPlayerIsFirst(prevCurrentPlayerIsFirst => !prevCurrentPlayerIsFirst);
    }
  }
    

  return (
    <div className="game">
      <Field 
        enemyFields={ enemyFields[currentPlayerIsFirst ? 'player1' : 'player2'] } 
        onClick={ handleClick }
      />
      <GameLog
        currentPlayerIsFirst={ currentPlayerIsFirst }
        logs={ logs }
      />
    </div>
  );
}

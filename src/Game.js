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
  const [enemyFields, setEnemyFields] = useState(Array(10).fill().map((_, x) => Array(10).fill().map((_, y) => ({
    x,
    y,
    containsShip: false,
    shot: false,
    shipId: null,
  }))));
  const [enemyShips] = useState([...getSet(randomInteger(0, 2))]);
  const [gameOver, setGameOver] = useState(false);
  const [logs, setLogs] = useState(['Ожидание хода...']);

  useEffect(() => {
    enemyShips.forEach(ship => {
      setEnemyFields(placeShip(enemyFields, ship));
    });
  }, []);

  const handleClick = (x, y) => {
    if (gameOver || enemyFields[x][y].shot) {
      return;
    }

    const newFields = [...enemyFields];
    newFields[x][y].shot = true;

    setEnemyFields(newFields);

    if (newFields[x][y].containsShip) {
      const hittedShip = enemyShips.find(ship => (ship.id === newFields[x][y].shipId));

      hittedShip.hitpoints--;
      setLogs(prevLogs => [...prevLogs, hittedShip.hitpoints > 0 ? 'Попадание!' : 'Корабль уничтожен!']);

      if (enemyShips.every(ship => (ship.hitpoints === 0))) {
        setLogs(prevLogs => [...prevLogs, 'Игра окончена.']);
        setGameOver(true);
      }
    } else {
      setLogs(prevLogs => [...prevLogs, 'Мимо!']);
    }
  }
    

  return (
    <div className="game">
      <Field 
        enemyFields={ enemyFields } 
        onClick={ handleClick }
      />
      <GameLog logs={logs} />
    </div>
  );
}

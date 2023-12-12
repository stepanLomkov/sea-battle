import React from 'react';

export function Square({ x, y, containsShip, onClick, shot }) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К'];
    const leftLine = y === 0;
    const topLine = x === 0;

    return (
        <div className={`square ${containsShip && shot ? 'visibleShip' : ''}`} onClick={ () => onClick(x, y) }>
            <span>{shot ? containsShip ? 'X' : '·' : null}</span>
            {leftLine ? <span className="leftLine">{numbers[x]}</span> : ''}
            {topLine ? <span className="topLine">{letters[y]}</span> : ''}
        </div>
    )
}
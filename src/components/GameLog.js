import React from 'react';

export function GameLog({ currentPlayerIsFirst, logs }) {
    return (
        <div className="gamelog">
            <div className="gamelog-header">
                {`Сейчас ходит - ${currentPlayerIsFirst ? "Игрок 1" : "Игрок 2"}`}
            </div>
            <div className="gamelog-header">
                История ходов:
            </div>
            <ul className="gamelog-list">
                {logs.map((log, index) => {
                    return (
                        <li key={ index }>{`${index === 0 ? '' : index + '.'} ${log}`}</li>
                    )
                }).reverse()}
            </ul>
        </div>
    )
}
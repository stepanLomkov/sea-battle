import React from 'react';

export function GameLog({ logs }) {
    return (
        <div className="gamelog">
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
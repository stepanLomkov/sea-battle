import React from 'react';
import { Square } from './Square'

export function FieldRow({ onClick, row } ) {
    return (
        <div>
            {row.map(({x, y, containsShip, shot}, index) => {
                return (
                    <Square 
                        key={ index }
                        x={ x } 
                        y={ y } 
                        containsShip={ containsShip } 
                        onClick={ onClick }
                        shot={ shot } 
                    />
                );
            })}
        </div>
    );
}
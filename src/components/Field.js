import React from 'react';
import { FieldRow } from './FieldRow';

export function Field({ enemyFields, onClick }) {
    return (
        <div>
            {enemyFields.map((row, index) => {
                return (
                    <FieldRow 
                        key={ index }
                        row={ row } 
                        onClick={ onClick } 
                    />
                )
            })}
        </div>
    )
}
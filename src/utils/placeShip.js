export default (fields, ship) => {
    const copyFields = [...fields];

    switch(ship.direction) {
        case 'right': 
            for (let i = ship.startSquare.x; i < ship.startSquare.x + ship.size; i++) {
                copyFields[ship.startSquare.y][i].containsShip = true;
                copyFields[ship.startSquare.y][i].shipId = ship.id;
            }
            break;
        case 'down': 
            for (let i = ship.startSquare.y; i < ship.startSquare.y + ship.size; i++) {
                copyFields[i][ship.startSquare.x].containsShip = true;
                copyFields[i][ship.startSquare.x].shipId = ship.id;
            }
            break;
    }

    return copyFields;
}
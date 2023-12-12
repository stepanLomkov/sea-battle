let shipId = 0;

function getShip(size, startSquare, direction) {
    return {
        size,
        startSquare,
        direction,
        id: shipId++,
        hitpoints: size,
    };
}

export function getSet(i) {
    const set = [];

    switch (i) {
        case 0:
            set.push(getShip(4, { x: 0, y: 0 }, 'right'));
            set.push(getShip(3, { x: 2, y: 3 }, 'down'));
            set.push(getShip(3, { x: 7, y: 4 }, 'down'));
            set.push(getShip(2, { x: 4, y: 8 }, 'right'));
            set.push(getShip(2, { x: 1, y: 9 }, 'right'));
            set.push(getShip(2, { x: 7, y: 9 }, 'right'));
            set.push(getShip(1, { x: 9, y: 3 }, 'right'));
            set.push(getShip(1, { x: 4, y: 5 }, 'right'));
            set.push(getShip(1, { x: 9, y: 6 }, 'right'));
            set.push(getShip(1, { x: 9, y: 9 }, 'right'));
            break;
        case 1:
            set.push(getShip(4, { x: 0, y: 9 }, 'right'));
            set.push(getShip(3, { x: 0, y: 5 }, 'down'));
            set.push(getShip(3, { x: 3, y: 5 }, 'down'));
            set.push(getShip(2, { x: 0, y: 3 }, 'right'));
            set.push(getShip(2, { x: 1, y: 1 }, 'right'));
            set.push(getShip(2, { x: 3, y: 3 }, 'right'));
            set.push(getShip(1, { x: 5, y: 1 }, 'right'));
            set.push(getShip(1, { x: 9, y: 0 }, 'right'));
            set.push(getShip(1, { x: 7, y: 5 }, 'right'));
            set.push(getShip(1, { x: 6, y: 8 }, 'right'));
            break;
        case 2:
            set.push(getShip(4, { x: 3, y: 2 }, 'right'));
            set.push(getShip(3, { x: 1, y: 4 }, 'down'));
            set.push(getShip(3, { x: 0, y: 9 }, 'right'));
            set.push(getShip(2, { x: 7, y: 0 }, 'right'));
            set.push(getShip(2, { x: 9, y: 2 }, 'down'));
            set.push(getShip(2, { x: 4, y: 8 }, 'down'));
            set.push(getShip(1, { x: 4, y: 5 }, 'right'));
            set.push(getShip(1, { x: 7, y: 5 }, 'right'));
            set.push(getShip(1, { x: 6, y: 8 }, 'right'));
            set.push(getShip(1, { x: 9, y: 9 }, 'right'));
            break;
    }

    return set;
}

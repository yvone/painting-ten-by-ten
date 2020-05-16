import React from 'react';

import Box from '../box';

function Board(props) {
    console.log(props);

    // const {
    //     grid,
    // } = props;

    const grid = [
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white',
        'white','white','white','white','white','white','white','white','white','white'
    ];

    return (
        <div className="grid grid-cols-10">
            {grid && grid.map(box => (
                <Box />
            ))}
        </div>
    )
}

export default Board;
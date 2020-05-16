import React from 'react';
import PropTypes from 'prop-types';

import Box from '../box';

function Board(props) {
    const {
        grid,
        onColorChange
    } = props;

    return (
        <div className="grid grid-cols-10 board">
            {grid && grid.map((boxColor, index) => (
                <Box
                    key={`box-${index}`}
                    color={boxColor}
                    onClick={() => onColorChange(index)}
                />
            ))}
        </div>
    )
}

Board.propTypes = {
    grid: PropTypes.array.isRequired,
    onColorChange: PropTypes.func.isRequired
}

export default Board;
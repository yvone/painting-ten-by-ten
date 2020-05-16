import React from 'react';
import PropTypes from 'prop-types';

function Board(props) {
    const {
        grid,
        onColorChange
    } = props;

    function changeBoxColor(index) {
        onColorChange(index);
    }

    function mouseMove(index, e) {
        if(e.buttons === 1) {
            onColorChange(index);
        }
    }

    return (
        <div className="grid grid-cols-10 board">
            {grid && grid.map((boxColor, index) => (
                <div
                    key={`box-${index}`}
                    className={`box bg-${boxColor}`}
                    onClick={() => changeBoxColor(index)}
                    onMouseMove={(e) => mouseMove(index, e)}
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
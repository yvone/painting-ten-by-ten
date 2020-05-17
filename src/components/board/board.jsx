import React from 'react';
import PropTypes from 'prop-types';

function Board(props) {
    const {
        grid,
        onColorChange,
        isPrinting
    } = props;

    function changeBoxColor(index) {
        onColorChange(index);
    }

    function mouseMove(index, e) {
        if(e.buttons === 1) { // left-click = 1
            onColorChange(index);
        }
    }

    return (
        <div className="flex">
            <div className={`overlay ${isPrinting ? 'overlay--show' : ''}`}/>

            <div id="painting" className="grid grid-cols-10 board" ref={props.paitingRef}>
                {grid && grid.map((boxColor, index) => (
                    <div
                        key={`box-${index}`}
                        className={`board-box bg-${boxColor}`}
                        onClick={() => changeBoxColor(index)}
                        onMouseMove={(e) => mouseMove(index, e)}
                    />
                ))}
            </div>
        </div>
    )
}

Board.propTypes = {
    grid: PropTypes.array.isRequired,
    onColorChange: PropTypes.func.isRequired,
    isPrinting: PropTypes.bool.isRequired
}

export default Board;
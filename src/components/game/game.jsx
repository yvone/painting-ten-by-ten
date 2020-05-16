import React, { useState, useEffect } from 'react';

// components
import ColorPicker from '../colorPicker';
import Board from '../board';

import '../../styles/index.css';

const INITIAL_GRID = Array(100).fill('white');

function Game(props) {
    let [color, setColor] = useState('black');
    let [grid, setGrid] = useState(window.localStorage.getItem('painting').split(',') || INITIAL_GRID);

    useEffect(() => window.localStorage.setItem('painting', grid));

    function onColorChange(id){
        const newPainting = [...grid];
        newPainting[id] = color;
        setGrid(newPainting);
    }

    function onReset(){
        setGrid(INITIAL_GRID);
    }

    function onPrint(){
        // TODO: print
    }

    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-row full-w mb-4">
                <button
                    className="btn btn--blue mr-2"
                    type="button"
                    onClick={onReset}
                >
                    New game 
                </button>
                <button
                    className="btn btn--blue mr-2"
                    type="button"
                    onClick={onPrint}
                >
                    Print
                </button>
                <ColorPicker
                    selectedColor={color}
                    onChange={setColor}
                />
            </div>
            <div className="flex flex-row full-w justify-between">
                <Board
                    grid={grid}
                    onColorChange={onColorChange}
                />
            </div>
        </div>
    )
}

export default Game;

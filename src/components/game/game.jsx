import React, { useState } from 'react';

// components
import ColorPicker from '../colorPicker';
import Board from '../board';

import '../../styles/index.css';

function Game(props) {
    let [color, setColor] = useState('black');

    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-row full-w mb-2">
                <button
                    className="btn btn--blue mr-2"
                    type="button"
                >
                    New game 
                </button>
                <button
                    className="btn btn--blue mr-2"
                    type="button"
                >
                    Print
                </button>
                <ColorPicker selectedColor={color} onChange={setColor} />
            </div>
            <div>
                <Board />
            </div>
        </div>
    )
}

export default Game;

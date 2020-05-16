import React from 'react';

// components
import ColorPicker from '../colorPicker';
import Board from '../board';

import '../../styles/index.css';

function Game(props) {
    return (
        <div className="flex flex-col p-4 items-center">
            <div className="flex flex-row full-w justify-between">
                <button
                    className="btn btn--blue"
                    type="button"
                >
                    New game
                </button>
                <button
                    className="btn btn--blue"
                    type="button"
                >
                    Print
                </button>
                <div>
                    <ColorPicker />
                </div>
            </div>
            <div>
                <Board />
            </div>
        </div>
    )
}

export default Game;

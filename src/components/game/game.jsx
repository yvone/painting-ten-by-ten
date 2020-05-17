import React, { useState, useEffect, useRef } from 'react';

import html2canvas from 'html2canvas';

// components
import ColorPicker from '../colorPicker';
import Board from '../board';

import '../../styles/index.css';

const INITIAL_GRID = Array(100).fill('white');

function Game(props) {
    let [color, setColor] = useState('black');
    let [grid, setGrid] = useState(window.localStorage.getItem('painting').split(',') || INITIAL_GRID);
    let [isPrinting, setIsPrinting] = useState(false);
    const painting = useRef();
    const capture = useRef();

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
        // Removes borders to get a clean .png
        setIsPrinting(true);
        painting.current.classList.add("board--clean");

        html2canvas(painting.current).then(canvas => {
            painting.current.classList.remove("board--clean");
            
            capture.current.innerHTML = '';
            capture.current.appendChild(canvas);

            setIsPrinting(false);
        });
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
            <div className="flex flex-row full-w justify-around">
                <div ref={capture} id="capture" className="bg-gray-200">
                    <div className="empty-state" />
                    <p className="my-4">There's no image to download. Draw and print!</p>
                    <button
                        className="btn btn--blue mr-2"
                        type="button"
                        onClick={onPrint}
                    >
                        Print
                    </button>
                </div>

                <Board
                    grid={grid}
                    onColorChange={onColorChange}
                    paitingRef={painting}
                    isPrinting={isPrinting}
                />
            </div>
        </div>
    )
}

export default Game;

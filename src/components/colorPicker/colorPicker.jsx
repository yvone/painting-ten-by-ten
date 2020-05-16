import React from 'react';
import PropTypes from 'prop-types';

const AVAILABLE_COLORS = [ 'black', 'white', 'gray', 'red', 'orange',
    'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink' ];

function ColorPicker(props) {
    const {
        selectedColor,
        onChange,
    } = props;

    return (
        <div className="flex flex-1 justify-between items-center bg-gray-200 p-2">
            <p>Choose a color to start painting: </p>
            <div className="flex flex-1 justify-end">
                {AVAILABLE_COLORS.map(color => {
                    const isSelected = color === selectedColor;

                    return (
                        <div
                            key={color}
                            className={`color-pill bg-${color} ${isSelected ? 'color-pill--selected' : ''}`}
                            onClick={() => onChange(color)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

ColorPicker.propTypes = {
    selectedColor: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default ColorPicker;
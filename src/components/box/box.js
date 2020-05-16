import React from 'react';

function Box(props) {
    const {
        color = 'white',
        onClick
    } = props;

    return (
        <div
            className={`box bg-${color}`}
            onClick={onClick}
        />
    )
}

export default Box;
import React from 'react';

function Box(props) {
    const {
        color = 'white'
    } = props;

    return (
        <div className={`box box--${color}`}>
            
        </div>
    )
}

export default Box;
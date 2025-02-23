import React from 'react';
import WithComponent from './WithComponent';

const Hover = ({count,handleCount}) => {
    return (
        <div>
            <button onMouseOver={handleCount}>Hover {count}</button>
        </div>
    );
};

export default WithComponent(Hover);
import React from 'react';
import WithComponent from './WithComponent';

const Counter = ({count,handleCount}) => {
    return (
        <div>
            <button onClick={handleCount}>Counter {count}</button>
        </div>
    );
};

export default WithComponent(Counter);
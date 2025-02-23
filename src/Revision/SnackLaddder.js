import React, { useState } from 'react';

const Ladder={
    12:24,
    23:37,
    41:78,
    69:89,
    83:96
}

const Snack={
    11:6,
    33:11,
    42:24,
    59:39,
    84:56
}


const SnackLaddder = () => {
    const [diceCount,setDiceCount]=useState(0);

    const handleDice=()=>{
        const value=Math.floor(Math.random()*6)+1
setDiceCount(value);

    }

    return (
        <div>
            
            <button onClick={handleDice}>Dice</button>
        </div>
    );
};


export default SnackLaddder;
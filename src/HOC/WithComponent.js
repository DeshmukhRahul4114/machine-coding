import React, { useState } from 'react';

const WithComponent = (Component) => {
    return  function HocFunction(){
        const [count,setCount]=useState(0);

        const handleCount=()=>{
            setCount(prev=>prev+1);
        }
    
        return (
                <Component count={count} handleCount={handleCount} />
        );
    }
   
};

export default WithComponent;
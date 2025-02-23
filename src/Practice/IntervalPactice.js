import React, { useEffect, useState } from 'react';

const IntervalPactice = () => {
 const [count,setCount]=useState(100);
 const [flag,setFlag]=useState(false);

 useEffect(()=>{
  let interval=setInterval(()=>{
    if(flag){
        setCount((prev)=>{
            return prev-1<=0?0:prev-1;
            })
    }else{
        clearInterval(interval)
    }
  },100)
    return ()=>{
        return clearInterval(interval)
    }
 },[flag])

 useEffect(() => {
    let interval;
    
    if (flag) {
      interval = setInterval(() => {
        setCount((prev) => (prev - 1 <= 0 ? 0 : prev - 1));
      }, 100);
    }

    return () => clearInterval(interval); // ✅ Ensures cleanup
  }, [flag]); 
  
    const handleClick=()=>{
         setFlag((prev)=>!prev)
    }

    return (
        <div>
            {count}
            <button onClick={handleClick}>Start</button>
            <button onClick={handleClick}>Stop</button>
        </div>
    );
};

export default IntervalPactice;
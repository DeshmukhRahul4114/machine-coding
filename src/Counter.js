import { useEffect, useState } from "react"

// Show a button that will show start label on click it should show stop, 
// viceversa show a counter with 0, after clicking start it should increment
//  the counter by 1 every one second, on click of stop it should stop the
//   counter and resume again where it was stopped previously.

const Counter=()=>{
    const [count,setCount]=useState(10);
    const [flag,setFlag]=useState(false)


    const handleCounts=()=>{
        setFlag(prv=>!prv)
    }

    useEffect(()=>{
        let interval;
        if(flag){
            interval= setInterval(()=>{
                if(count>0){
                    setCount(prev=>prev-1);
                }
           },1000)
        }
        return ()=>clearInterval(interval);
    },[flag,count])

    return(
        <>
        <div>{count}</div>
        <button onClick={handleCounts}>{flag?'Stop':'Start'}</button>
        </>
    )
};

export default Counter;
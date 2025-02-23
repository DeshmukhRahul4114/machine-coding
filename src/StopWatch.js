import React, { useRef, useState } from 'react';

const StopWatch=()=>{
const [date,setDate]=useState(null)
const [currentDate,setCurrentDate]=useState(null)
const ref=useRef();

function handleStart(){
    setDate(Date.now());
    // setCurrentDate(Date.now());

    ref.current=setInterval(()=>{
        setCurrentDate(Date.now());
    },10)

}

function handleStop(){
    clearInterval(ref.current)
}

let result=0;
if(date!==null&&currentDate!==null){
    result=(currentDate-date)/1000;
}

return (<>
<div>
    <div>{result.toFixed(3)}</div>
    <button  onClick={handleStart}>
        Start
    </button>
    <button  onClick={handleStop}>
        Stop
    </button>
</div>
</>)

}
export default StopWatch;

//i am not able to apply Date methods properly Dont know how to apply
//used setimeout instead setInterva
// used setTimeout and for clear using clearinterval

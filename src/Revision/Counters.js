import React, {useEffect, useRef,useState} from 'react';

const Counters = () => {

  // // stop watch
  // const [count,setCount]=useState(0);
  // const [time,setTime]=useState(0)
  // const ref=useRef(null);

  // // useEffect(()=>{
    

  // // })

  // const handleStart=()=>{
  //   setTime(Date.now())
  //   setCount(Date.now())
  //   clearInterval(ref.current);
  //   ref.current=setInterval(()=>{
  //     setCount(prev=>prev+1)
  //   },10)
  // }

  // const handleStop=(()=>{
  // clearInterval(ref.current)
  // })

  // let secondsPassed = 0;
  // if (time != null && count != null) {
  //   secondsPassed = (count - time) / 1000;
  // }

  // return (
  //   <div>
  //     {secondsPassed.toFixed(3)}
  //     <button onClick={handleStart}> Start</button>
  //     <button onClick={handleStop}>Stop</button>
  //   </div>
  // );

  const [count, setCount]=useState(30);
 const [flag,setFlag]=useState(false);
const interValRef=useRef(null);

// useEffect(() => {
//   interValRef.current = setInterval(() => {
//     setCount((prev) => prev<0?0:prev-1);
//   }, 100);

//   if (flag) {
//     clearInterval(interValRef.current);
//   }
// }, [flag]);
useEffect(() => {
  if (flag) {
    interValRef.current = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  } else {
    clearInterval(interValRef.current);
  }

  return () => clearInterval(interValRef.current); // Cleanup on unmount
}, [flag]);

const handleStart=()=> setFlag(!flag)

 return(<>
 {count}
 <br/>
 <button onClick={handleStart}>Start</button>
 <button onClick={handleStart}>Stop</button>
 </>)


};

export default Counters;
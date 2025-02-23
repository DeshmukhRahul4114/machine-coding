import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(100);
  const [flag, setFlag] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (flag) {
      ref.counter = setInterval(() => {
        setCount((prev) =>{ if(prev - 1===0){
            clearInterval(ref.counter);
            setFlag((prev) => !prev);
            return 0;
        }else{
          return prev-1;
        }})
      }, 100);
    } else {
      clearInterval(ref.counter);
    }
    return () => clearInterval(ref.counter);
  }, [flag]);

  const handleFlag = () => {
    setFlag((prev) => !prev);
  };
  //stop watch 11:47
  return (
    <div>
      {count}
      <button onClick={handleFlag}>{flag ? "stop" : "start"}</button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


const Star = () => {
  const [star, setStar] = useState(0);
  const [hoverIn, setHoverIn] = useState('');
  const arr = [1, 2, 3, 4, 5];

  const handleStar = (val) => {
    // console.log(e.target.value,'e.target.value')
    setStar(val+1);
  };

  const handleHover=(ind)=>{
    setHoverIn(ind)
  }
  const handleHover1=(ind)=>{
    setHoverIn('')
  }

  return (
    <>
      {
        <div
          style={{ display: "flex", justifyItems: "center", flexWrap: "wrap",cursor:"pointer" } }
        >
          {arr.map((data, index) => (
            <FaStar key={index} value={index} onClick={()=>handleStar(index)} onMouseEnter={()=>handleHover(index)} onMouseLeave={()=>handleHover1()}  style={{color:star>index||hoverIn===index?'green':'lightcyan'}}>
            {/* <span key={index} value={index} onClick={()=>handleStar(index)}>
              {star>index ? "⭐" : "☆"}
            </span> */}
            </FaStar>
          ))}
        </div>
      }
    </>
  );
};

export default Star;

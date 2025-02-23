import React, { PureComponent, useState } from 'react';

const StarRating =()=> {
    const [ind,setInd]=useState(0)
    const arr=Array(5).fill(0);
    const handleOnclick=(index)=>{

        setInd(index)
}      
  return (
<div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
           {
            arr.map((val,index)=>(
                <div style={{color:index+1<=ind?'red':''}} id={index+1} onClick={()=>handleOnclick(index+1)}>{'\u2606'}</div>
            ))
           }
           </div>
        );
}


export default StarRating;
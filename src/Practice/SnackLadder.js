import React, { useState } from 'react';

const SnackLadder = () => {
    const [size,setSize]=useState(0);

    const handleChange=(e)=>{
     const value=e.target.value;
     setSize(value)
    }
    let count=size*size;

    const handleGoti=()=>{
        const random=Math.random(6);
        
    }

    return (
        <>
      
        <div style={{margin:"0 auto", width:"20%",height:'500px',display:"grid",gridTemplateColumns:`repeat(${size},2fr)`}}>{
            Array.from({length:size}).map((item,id)=>(
            Array.from({length:size}).map((item,index)=>(
                   <div key={`${id}_${index}`} style={{width:"50px",height:'50px', border:'1px solid red'}}>
                    {count--}
                   </div>
            ))
        ))
        }
        </div>
        <input type='number' onChange={handleChange} placeholder='ENter Grid number' />
        <button onClick={handleGoti}>Goti</button>
        </>
    );
};

export default SnackLadder;
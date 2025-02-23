import React, { useEffect, useState } from 'react';

const Carousal = () => {
    const [indexVal,setIndexVal]=useState(0)
    const datas = [
        { id: 0, desc: "Name 1" },
        { id: 1, desc: "Name 2" },
        { id: 2, desc: "Name 3" },
      ];

      useEffect(()=>{
       let interval= setInterval(()=>{
            setIndexVal((pev)=>(pev+1)%3)
        },1000)

        return ()=>clearInterval(interval)
      },[])

      const handelPrev=(e)=>{
        setIndexVal((pev)=>(pev-1<0?0:pev-1)%3)
      }
      const handelNext=()=>{
        setIndexVal((pev)=>(pev+1)%3)
      }

    return (
        <div style={{width:'500',height:'500px', display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
            <button onClick={handelPrev}>Prev</button>
            {datas.map((data,index)=>(
                index===indexVal&&<div key={index} style={{width:'200px', height:"200px", backgroundColor:'green'}}>
                  {data.desc}
               </div>
            ))}
            <button onClick={handelNext}>Next</button>
        </div>
    );
};

export default Carousal;
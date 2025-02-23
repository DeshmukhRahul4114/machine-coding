import React, { useState } from 'react';
import { ageData } from './Data';

const AgeObjectManuplation = () => {
    const [data,setData]=useState(ageData);

    const handleClick=(id)=>{
    //   const newData=data.map((item,index)=>(index===id?{...item,age:item.age+1}:item))
    const newData=[...data];
    let obj=newData[id];
    newData[id]={...obj,isAdult:obj.age>=18,age:obj.age+1}

      console.log(newData,"newData")
      setData(newData);
    }

    return (
        <div>
            {
                data.map((item,index)=>(
                    <div key={index}>
                        <span>{item.name}</span>
                        <span>{item.isAdult+""}</span>
                        <span>{item.age}</span>
                    </div>
                ))
            }
           <button onClick={()=>handleClick(0)}>{data[0].name}</button>
           <button onClick={()=>handleClick(1)}>{data[1].name}</button>
        </div>
    );
};

export default AgeObjectManuplation;
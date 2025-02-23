import React, { useState } from 'react';

const accData=[
    {lable:'Accordian 1',content:'acordian content 1'},
    {lable:'Accordian 2',content:'acordian content 2'},
    {lable:'Accordian 3',content:'acordian content 3'},
]

const Accordian = () => {
    const [selectedAcc,setSelectedAcc]=useState([]);
    const [value,setValue]=useState(false)

    const handleChange=(value)=>{
        setSelectedAcc((prev)=>prev.includes(value)?[...prev.filter((val)=>value!=val)]:[...prev,value])
    }

    const handleChangeType=(e)=>{
       setValue(e.target.checked)
    }

    console.log('@value',value)

    return (<>
    <input type='checkbox' onChange={handleChangeType}></input>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center', padding:'0 30px'}}>
            {accData.map((data,index)=>(
                <>
              <div onClick={()=>handleChange(index)} style={{display:'flex',padding:'0 20px',justifyContent:'space-between',alignItems:"center",flexDirection:'row',backgroundColor:'lightgray',width:'80%',marginBottom:'5px',}}>
                <span>{data.lable}</span>
                <span>^</span>
              </div>
              {selectedAcc.includes(index)&&<div>{data.content}</div>}
              </>
            ))}
        </div>
            </>

    );
};

export default Accordian;
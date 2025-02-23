import React, { useState } from 'react';

const DragAndDrop = () => {
const [arr,setArr]=useState([1,2,3,4,5,6,7,8])
const [startValue,setStartValue]=useState('')
const [endValue,setEndValue]=useState('')

    const handleDrag=(index,value)=>{
          setStartValue(value)
          console.log(value,'value')
    }
    const handleDragLeave=(index,value)=>{
             const dummyArr=[...arr];
             const strt=dummyArr.indexOf(startValue)
             const end=dummyArr.indexOf(value);
             dummyArr[end]=startValue;
             dummyArr[strt]=value;
             setArr(dummyArr)
    }

    return (<div style={{width:'50%',margin:'0 auto',display:'flex',flexDirection:'row',alignContent:'center'}}>
    {
        arr.map((value,index)=>(
            <div key={index} style={{width:'50px',heigh:'50px',border:'1px solid red'}} onDrag={()=>{handleDrag(index,value)}} onDragLeave={()=>handleDragLeave(index,value)}>
            {value}
            </div>
        ))
    }
    </div>
       
    );
};

export default DragAndDrop;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { use } from 'react';

const ApiPractice = () => {
    const [isLoading,setLoading]=useState(false);
    const [setsIndex,setSetsIndex]=useState('');
    const [enterValue,setEnterValue]=useState('');
    const [data,setData]=useState([])

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>setData(response.data)).catch((e)=>console.log(e));
    // },[])

    // useEffect(()=>{
    //     const fetchData=async ()=>{
    //         try{
    //             const response=await axios.get('https://jsonplaceholder.typicode.com/users');
    //             console.log(response,'response')
    //                setData(response.data);
    //         } catch(e)
    //         {console.log(e)}
            
    //     }
    //     fetchData()
    // },[])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
                return res.json()
            }
            ).then((datas)=>setData(datas))
            .catch((e)=>console.error(e))
    })

const onHandle=(e)=>{
const index=e.target.dataset.value;
console.log(index,"index===setsIndex")
setSetsIndex(parseInt(index))
}

const handleInput=(e)=>{
    setEnterValue(e.target.value);
}
    
const handleClear=()=>{
    setEnterValue('');
}
    
    return (
        <div style={{width:'300px', margin:'0 auto'}}>
            <input
            value={enterValue}
            onChange={handleInput}
            placeholder='enter value'
            />
            <button onClick={handleClear}>Clear</button>
       {data?.map((value,index)=>(
        <div>
            <li data-value={index} onClick={onHandle} key={`index-${value.name}`}>{value.name}-{value.username}</li>
            {index===setsIndex&&<div>{`${value.address.city} ${value.address.street}`}</div>}
        </div>
       ))}
     </div>
    );
};

export default ApiPractice;
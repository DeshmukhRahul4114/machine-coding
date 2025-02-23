import React, { useEffect, useState } from 'react';

const AutoComplete = () => {
    const [data,setData]=useState([{id:1,name:'rd',item:[{vegetable:'cabage',dish:'Veg'},{vegetable:'chicken',dish:'NoVeg'}]},{id:1,name:'rd',item:[{vegetable:'cabage',dish:'Veg'},{vegetable:'chicken',dish:'NoVeg'}]}]);
    const [value,setValue]=useState('')
    const [cache,setCache]=useState({})
    const fetchData=async()=>{
        if(cache[value]){
            setData(cache[value])
            console.log('from cache',value)
            return
        }

         try {
            const resp=await fetch(`https://dummyjson.com/recipes/search?q=${value}`);
            const res=await resp.json();
            setData(res.recipes)
            setCache(prev=>({...prev,[value]:res.recipes}))
            console.log('from api',value,cache)
         } catch (error) {
            console.log(error)
         }
    }

    useEffect(()=>{
        let interval=setTimeout(()=>{
            // fetchData();
        },300)

        return ()=>{
            clearTimeout(interval)
        }
    },[value])

    // console.log(value)
    const handleOnChange=(e)=>{
        // setValue(e.target.value)
        setData((prev)=>{
console.log(prev,'val')
          let res=  prev.map((it)=>(
                {...it,item:[...it.item.map((value)=>(
                    {
                          ...value,
                          updateBy:e.target.value
                    }
                ))]}
            ))

            return res;
        })
    }

    console.log(data,'setDtaa')
    return (
        // <div style={{margin:'0 auto',width:'300px'}} >
             <input style={{height:'50px',margin:'0 auto',width:'100%'}} type='text' onChange={handleOnChange} placeholder='Enter Text'/>
        //     <div style={{maxHeight:'200px',margin:'0 auto',overflowY:'scroll'}}>
        //     {data.length>0&&data.map((item,id)=>(
        //         <div key={item.id}>{item.name}</div>
        //     ))}
        //     </div>
        // </div>
    );
};

export default AutoComplete;

/// for calling api fetch i am using FetchData   function getting stack memory error
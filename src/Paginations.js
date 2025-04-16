import React, { useEffect, useState } from 'react';

const INITIAL_SIZE=10;

const Paginations = () => {
    const [data,setData]=useState([]);
    const [page,setPage]=useState(0);

    const fetchData=async ()=>{
        const response= await fetch(`https://dummyjson.com/products?limit=194`);
        const res=await response.json();
        console.log(res,'res1')
        setData(res?.products)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handlePage=(id)=>{
        setPage(id)
    }

    const handleNext=()=>{
        setPage(prev=>prev+1)
    }
    const handlePrev=()=>{
        setPage(prev=>prev-1)
    }

    const totalPage=Math.ceil(data.length/INITIAL_SIZE);
    const start=page*INITIAL_SIZE;
    const end=start+INITIAL_SIZE;

    return (
        <>
        <div style={{display:"flex",flexWrap:'wrap'}}>
            {data.length>0&&data.slice(start,end).map((item,id)=>(
              <div key={item.id} style={{width:'100px',height:"content-fit",padding:'10px',margin:'5px',border:'1px solid black'}}>
                    <img style={{width:'70px',height:"70px"}}src={item.images[0]} alt={item.title}/>
                    <div>{item.title}</div>
              </div>
            ))}
        </div>
          <div>
            <button disabled={page===0} onClick={handlePrev}>Prev</button>
          {Array.from({length:totalPage},(_,id)=>(
            <span key={id} style={{height:'10px',width:'10px',padding:'2px',margin:'2px',border:'1px solid red',backgroundColor:id===page?'blue':'',cursor:'pointer'}} onClick={()=>handlePage(id)}>{id}</span>
          ))
          
        }
        <button disabled={page===totalPage-1}  onClick={handleNext}>Next</button>

        </div>
        {/* {
          Array.from({length:10},(_,index)=>(
            <span></>
          ))
        } */}
        </>
    );
};

export default Paginations;
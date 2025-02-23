import React, { useEffect, useState } from 'react';

const Todo = () => {
const [todoData,setTodoData]=useState({})

    useEffect(()=>{
        fetch('https://dummyjson.com/todos?limit=10&skip=80').then((data)=>data.json())
        .then((data)=>{
            // console.log(data.todos)
            const res=data.todos.reduce((acc,res)=>{
              if(!acc[res.userId]){
                acc[res.userId]=[res]
              }else{
                acc[res.userId].push(res);
              }
              return acc;
              
            },{})
            // console.log(res,data.todos,'result')
            setTodoData(res)})
        .catch(e=>console.log(e))
    },[]);

    const data=[1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]
    const flattenArray=(data)=>{
        const res=data.reduce((acc,res)=>{
            if(Array.isArray(res)){
                const data2=flattenArray(res)
               acc.push(...data2);
         }else{
            acc.push(res)
         }
         return acc;
        },[])
        return res;
    }
    useEffect(()=>{
        //  const res=data.reduce((acc,res)=>{
        //     if(Array.isArray(res)){
        //       acc.push(...res)
        //  }else{
        //     acc.push(res)
        //  }
        const data1=flattenArray(data);
        console.log(data1,"data")

    },[])

    // console.log(todoData,Object.keys(todoData),'toDo1')
    return (
        <>
            {
                Object.keys(todoData).map((data,index)=>(   
<>
                           <div>Title: { data}</div>
                           <ul>
                   { 
                   todoData[data].map((value,id)=>(
                         <li key={id}>{value.todo}</li>
                    ))}
                    </ul>
                    </>
                      )
                )
                
            }
            
        </>
    );
};

export default Todo;
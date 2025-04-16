import React, { useId, useState } from 'react';

//data=[{id:1,title:"task1"}]
// 

const Todo = () => {
    const [data,setData]=useState([{id:1,title:"task1"}]);

const handleAdd=()=>{
    const res=prompt()
    setData((prev)=>[...prev,{id:Date.now(),title:res}])
}

const handleDelete=(id)=>{
    console.log(id)
    const res=data.filter(val=>val.id!==id)
    setData(res)
}

const handleEdit=(id,index)=>{
    const resp=[...data]
    const res=prompt('',data[index]?.title);

    resp[index].title=res;
    
    console.log(res,"res")
    setData(resp)
}

    return (
        <div>
            <button onClick={handleAdd}>Add Todo</button>
            {
                data.map((item,index)=>(
                    <div key={item.id}>{item.title}
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    <button onClick={()=>handleEdit(item.id,index)}>Edit</button>
                    <hr/>
                    </div>
                ))
            }
        </div>
    );
};

export default Todo;
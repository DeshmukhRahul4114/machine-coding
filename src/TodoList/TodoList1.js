import React, { useState } from "react";

const TodoList1 = () => {
    const [name,setName]=useState('')
  const [item, setItem] = useState([
    { id: 1, item: "todo1" },
    { id: 2, item: "todo2" },
  ]);

  const handleAddTodo = () => {
    const payload = {
      id: item.length + 1,
      item: name,
    };
    setItem((prevState) => 
      [...prevState, payload]
    );
  };

  const handleDelete=(id)=>{
    const deleteValue=item.filter(item=>item.id!==id);
    console.log("deleteValue",deleteValue)
    setItem(deleteValue)
  } 
  console.log("value",item)
  return (
    <>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>handleAddTodo()}>{"Add Todo"}</button>
      </div>
      
        {
           item.map((value)=>(
                <div key={value.id} style={{display:"flex",justifyContent:"center"}}>
                   <div>{value.item}</div>
                   <div>
                    <button>{"Edit"}</button>
                    <button onClick={()=>handleDelete(value.id)}>{"Delete"}</button>
                   </div>
                </div>
            ))
        }
    </>
  );
};

export default TodoList1;

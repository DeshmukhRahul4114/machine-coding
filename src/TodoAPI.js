// Given an API returning a list of todos, we want to fetch the list,
// create a separate block for each user, and display their todos in the appropriate block.
//  Use this endpoint URL to get the todos: https://dummyjson.com/todos?limit=10&skip=80.
//   It will return the following structure with a total of 10 todos:
//   { “todos”: [ { “id”: 1, “todo”: “Do something nice for someone I care about”, “completed”: true, “userId”: 26 }, ], }
//  Each block should contain the userId as the title of the block and the list of todos.

import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoAPI = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const fetchApi = async (limit, skip) => {
      try {
        const data = await axios.get(
          `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
        );
        console.log(data.data.todos);
        data.data.todos.reduce((acc,res)=>{
            if(acc[res.userId]){
                acc[res.userId]=acc.push(res);
            }
            else{
                acc[res.userId]=[]
            }
            return acc;
        },{})
        setTodoData(data.data.todos);
      } catch (e) {
        console.log("Error", e);
      }
    };
    fetchApi(10, 0);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems:'center'
      }}
    >
      {todoData.map((data) => (
        <div key={data.id} style={{ width: "200px", height: "auto",padding:'20px',margin:'5px',borderRadius:'5px',border:'1px solid',backgroundColor:'cyan' }}>
          <div>{data.userId}</div>
          <strong>{data.todo}</strong>
        </div>
      ))}
    </div>
  );
};

export default TodoAPI;

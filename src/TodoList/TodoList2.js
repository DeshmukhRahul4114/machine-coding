import { useState } from "react";

const TodoList2 = () => {
  const [todo, setTodo] = useState('');
  const [listTodo, setListTodo] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setListTodo((prev) => [...prev, todo]);
    setTodo('')
  };

  const handleUpdateTodo=()=>{}
  console.log(listTodo);

  return (
    <>
      <input type="text" value={todo} onChange={handleChange}></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {listTodo.map((data, index) => {
          return (
            <li
              style={{
                width: "200px",
                height: "50px",
                margin: "5px",
                backgroundColor: "cyan",
              }}
            >
              {data}
              <button handleChange={handleUpdateTodo}>Edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList2;

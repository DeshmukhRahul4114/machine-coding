import React, { useState } from 'react';

const Kanban = () => {
    const [todo, setTodo] = useState([{ id: 1, Title: "React Task" }]);
    const [inprogress, setInprogress] = useState([{ id: 3, Title: "JS Task" }]);
    const [done, setDone] = useState([{ id: 2, Title: "HTML Task" }]);
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (item, source) => {
        setDraggedItem({ item, source });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (target) => {
        if (!draggedItem) return;
        const { item, source } = draggedItem;

        if (source === target) return;

        const removeItem = (list, id) => list.filter((task) => task.id !== id);
        const addItem = (list, item) => [...list, item];

        if (source === 'todo') setTodo(removeItem(todo, item.id));
        if (source === 'inprogress') setInprogress(removeItem(inprogress, item.id));
        if (source === 'done') setDone(removeItem(done, item.id));

        if (target === 'todo') setTodo(addItem(todo, item));
        if (target === 'inprogress') setInprogress(addItem(inprogress, item));
        if (target === 'done') setDone(addItem(done, item));

        setDraggedItem(null);
    };

    return (
        <div style={{ display: 'flex', flexDirection: "column", height: "500px", width: "500px", justifyContent: "center", alignItems: "center", border: "1px solid red", margin: "0 auto" }}>
            <div style={{ display: 'flex', flexDirection: "row", height: "20%", width: "100%", border: "1px solid red" }}>
                <div style={{ border: "1px solid red", width: "33%" }}>TODO</div>
                <div style={{ border: "1px solid red", width: "33%" }}>In-progress</div>
                <div style={{ border: "1px solid red", width: "33%" }}>Done</div>
            </div>
            <div style={{ display: 'flex', flexDirection: "row", height: "80%", width: "100%", border: "1px solid red" }}>
                <div onDragOver={handleDragOver} onDrop={() => handleDrop('todo')} style={{ border: "1px solid red", width: "33%" }}>
                    {todo.map((item) => (
                        <div key={item.id} draggable onDragStart={() => handleDragStart(item, 'todo')} style={{ display: 'flex', flexDirection: "column", height: "50px", justifyContent: "center", alignItems: "center", border: "1px solid green", cursor: "grab" }}>
                            {item.Title}
                        </div>
                    ))}
                </div>
                <div onDragOver={handleDragOver} onDrop={() => handleDrop('inprogress')} style={{ border: "1px solid red", width: "33%" }}>
                    {inprogress.map((item) => (
                        <div key={item.id} draggable onDragStart={() => handleDragStart(item, 'inprogress')} style={{ display: 'flex', flexDirection: "column", height: "50px", justifyContent: "center", alignItems: "center", border: "1px solid green", cursor: "grab" }}>
                            {item.Title}
                        </div>
                    ))}
                </div>
                <div onDragOver={handleDragOver} onDrop={() => handleDrop('done')} style={{ border: "1px solid red", width: "33%" }}>
                    {done.map((item) => (
                        <div key={item.id} draggable onDragStart={() => handleDragStart(item, 'done')} style={{ display: 'flex', flexDirection: "column", height: "50px", justifyContent: "center", alignItems: "center", border: "1px solid green", cursor: "grab" }}>
                            {item.Title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Kanban;
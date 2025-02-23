import React, { useState } from 'react';

const JiraBoard = () => {
    const [boards,setBoards]=useState([[{id:1,title:'task 1'},{id:2,title:'task 2'}],[],[]]);
   const [indexs,setIndexs]=useState(null)
    const handleDrag=(e,nextCol)=>{
        if(!indexs){
       return ;
   }
       const {col,row}=indexs;
       const curColumRes=boards[col][row];
       let newBoard=[...boards];
       newBoard[col]=newBoard[col].filter((_,id)=>id!==row);
       newBoard[nextCol]=[...newBoard[nextCol],curColumRes]
       setBoards(newBoard);
       setIndexs(null);
    };
    const handleDragStart=(e,col,row)=>{
        // e.preventDefault();
        setIndexs({col,row})
       
    };

    const handleDragOver=(e)=>{
        e.preventDefault();
    };

    return (
        <>
         <div style={{display:'flex',flexDirection:'row',width:'80%',height:'15px',justifyContent:'space-between',alignItems:'center',border:'1px solid red'}}>
                <div>To-Do</div>
                <div>Start</div>
                <div>Done</div>
            </div>
        <div style={{display:'flex',flexDirection:'row',width:'80%',height:'400px',justifyContent:'center',alignItems:'center',border:'1px solid red'}}>
            {
                boards.map((board,index)=>(
                    <div key={index} onDragOver={handleDragOver} onDrop={(e)=>handleDrag(e,index)} style={{display:'flex',width:'33%', height:'100%',flexDirection:'column',border:'1px solid blue'}}>
                        {board.map((value,id)=>(
                           <div key={id} draggable onDragStart={(e)=>handleDragStart(e,index,id)} style={{width:'100%',height:'50px', cursor:'grab', border:'1px solid pink'}}>
                                <span>{value.title}</span>
                                <span>{value.id}</span>
                           </div> 
                        ))}
                    </div>
                ))
            }
        </div>
         </>
    );
};

export default JiraBoard;
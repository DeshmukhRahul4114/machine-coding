import React, { useEffect, useState } from "react";
import "./Boxes.css";

const Boxes = () => {

 const [grid,setGrid]=useState([
    { id: 1, isClicked: false, isVisible: true },
    { id: 2, isClicked: false, isVisible: true },
    { id: 3, isClicked: false, isVisible: true },
    { id: 4, isClicked: false, isVisible: true },
    { id: 5, isClicked: false, isVisible: false },
    { id: 6, isClicked: false, isVisible: false },
    { id: 7, isClicked: false, isVisible: true },
    { id: 8, isClicked: false, isVisible: true },
    { id: 9, isClicked: false, isVisible: true },
  ]);
  const [q,setQ]=useState([])

  // let queue=[]
  // const [queue,setQueue]=useState([]);

console.log(q)
  const onBoxClick=(index)=>{
    let newArr=[...grid];
    newArr[index]={...newArr[index],isClicked: true}
    // setQueue((prev)=>{return [...prev,newArr[index]]})
    setQ((prev)=>[...prev,newArr[index]])
    setGrid(newArr)
  };

  useEffect(()=>{
    console.log(q.length===7,q)
    let interval=null;
if(q.length==7){
  for(let i=0;i<7;i++){
    setInterval(() => {
      setGrid(prev=>prev.map(item=>item.id===q[i].id?{...item,isClicked: false}:item))
    }, (i+1)*1000);
  }
  setQ([])
}
return ()=>clearInterval(interval)
  },[grid])

  return (
    <div className="parent">
      {grid.map((value,index) => {
        return value.isVisible ? (
          <div key={value.id} className={`box ${ value.isClicked?'green':'yellow'}`} onClick={()=>onBoxClick(index)}>
            {value.id}
          </div>
        ) : (
          <div></div>
        );
      })}
    </div>
  );
};

export default Boxes;

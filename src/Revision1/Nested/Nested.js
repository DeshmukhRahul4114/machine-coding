import React, { useState } from "react";
import "./Nested.css";

const fileData1 = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Mobile phones",
        children: [
          { id: 3, name: "iPhone" },
          { id: 4, name: "Android" },
        ],
      },
      {
        id: 5,
        name: "Laptops",
        children: [
          { id: 6, name: "MacBook" },
          { id: 7, name: "Surface Pro" },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Books",
    children: [
      { id: 9, name: "Fiction" },
      { id: 10, name: "Non-fiction" },
    ],
  },
  { id: 11, name: "Toys" },
];

const Nested = () => {
    const [checkboxMap,setCheckBoxMap]=useState({1:true});

  const handleOnchange = (node,checked) => {
let newCheckBoxMap={...checkboxMap};


    const updateChild=(node,checked)=>{
        newCheckBoxMap[node.id]=checked;
        node.children&&node?.children.map((item)=>updateChild(item,checked))
    }
    updateChild(node,checked)

    const updateParent=(node,checked)=>{
        const parent=findParent(fileData1,node)
    }
    updateParent(node,checked)

setCheckBoxMap(newCheckBoxMap)

  };

  const findParent=(fileData1,node,parent=null)=>{
          if(fileData1.id===node.id){
            return 
          }
  }

  const nestedFun = (data,indent) => {
    return (
      <>
        {data.map((item,index) => {
            const checkedBox=!!checkboxMap[item.id];
          return (<div key={index} style={{paddingLeft:`${indent}px`}}>
            <input type="checkbox" onChange={()=>handleOnchange(item,!checkedBox)} checked={checkedBox}/>
            <label>{item.name}</label>
            {item.children && nestedFun(item.children,indent+10)}
          </div>)
  })}
      </>
    );
  };

  return <div>{nestedFun(fileData1,0)}</div>;
};

export default Nested;

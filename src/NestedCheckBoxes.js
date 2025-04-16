import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "mobile",
    children: [
      {
        id: 2,
        title: "iphone",
        children: [
          {
            id: 3,
            title: "iphone 16",
          },
          {
            id: 4,
            title: "iphone 15",
          },
        ],
      },
      {
        id: 5,
        title: "samsung",
        children: [
          {
            id: 6,
            title: "s 23",
          },
          {
            id: 7,
            title: "s 24",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "laptop",
    children: [
      {
        id: 9,
        title: "apple",
        children: [
          {
            id: 10,
            title: "macbook 1",
            children: [
              { id: 11, title: "macbook 11" },
              { id: 12, title: "macbook 12" },
            ],
          },
          {
            id: 13,
            title: "macbook 15",
          },
        ],
      },
    ],
  },
  { id: 16, title: "tablets" },
];

const NestedCheckBoxes = () => {
    const [selectedCheckBox,setSelectedCheckBox]=useState({})

    const handleChange=(id)=>{
        const checkboxChildren=(id)=>{
            console.log(id,'id')
            setSelectedCheckBox((prev)=>({...prev, [id]:true }));
            let currentData=data.find((item)=>item.id===id);
               console.log('currentData',currentData)
            {currentData.children&&currentData.children.forEach(element => {
                checkboxChildren(element.id)
            })
        }
        }
        checkboxChildren(id)
    }

    const showNestedCheckbox=(data,letMargin=0)=>{
        return (
            <>
            {data.map((item)=>(
                <div key={item.id} style={{marginLeft:letMargin}}>
                    <label>{item.title}</label>
               <input type="checkbox" checked={!!selectedCheckBox[item.id]} onChange={()=>handleChange(item.id)}/>
               {item.children&&showNestedCheckbox(item.children,letMargin+10)}
               </div>
            ))}
            </>
        )
    }

  return <div>
    {showNestedCheckbox(data)}
  </div>;
};

export default NestedCheckBoxes;

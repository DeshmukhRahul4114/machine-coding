import React, { useState } from "react";

const AccordionItem = ({ key, data, isOpen ,handleAction}) => {
 
    return (
        <div style={{ border:"1px solid red",margin:"2px" }} key={key} onClick={handleAction} >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>{data.title}</span>
        <span>{isOpen ? "- " : "+"}</span>
      </div>
      {isOpen && <div className="content">{data.content}</div>}
    </div>
  );
  };
const Accordion = ({ items }) => {
  const [open, setOpen] = useState("");

    const handleAction = (key) => {
      setOpen(key);
    };

  return (
    <>
      {items.map((data,index) => (
        <AccordionItem
          key={index}
          data={data}
          isOpen={index === open}
          handleAction={()=>handleAction(index)}
        />
      ))}
    </>
  );
};

export default Accordion;

import React, { useState, useEffect, useRef } from "react";

const AutoScrollingTextBox = () => {
  const [messages, setMessages] = useState([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const boxRef = useRef(null);

const handleMessage=()=>{
setMessages(prev=>[...prev,`Message ${prev.length}`])
}

const handleAutoScroll=()=>setAutoScroll(prev=>!prev)

useEffect(()=>{
  if (autoScroll && boxRef.current) {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }
},[autoScroll,messages])

 return(<>
 <div ref={boxRef} style={{  overflowX:'scroll',height:'200px',width:'300px',alignItems:'center', border:'1px solid red'}}>
  {messages.map((val,index)=>(<div key={index}>{val}</div>))}
 </div>
  <button onClick={handleMessage}>Add message</button>
  <button onClick={handleAutoScroll}>Add message</button>
 
 </>)
};

export default AutoScrollingTextBox;

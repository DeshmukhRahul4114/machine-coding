import React, { useState } from "react";

const Calculater = () => {
  const [input, setInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "C"];

  const handleClick=(value)=>{
     if(!isNaN(value)){
        setInput(input+value)
     }else if([ "+", "-", "*", "/"].includes(value)){
        setOperation(value)
        if(input!==''){
            setPrevInput(input)
        }
        setInput('')
     } else if(value==='C'){
        setInput('');
        setPrevInput('')
        setOperation('');
        setResult(0)
     }
  }

  const handleSubmit=()=>{
    // if(!prevInput||!input||operation){
    //     return ;
    // }
    let res=0;
     switch(operation){
        case '+':
            res= Number(input )+ Number(prevInput);
            break;
        case '-':
            res= prevInput-input;
            break;
        case '*':
            res= input*prevInput;
            break;
        case '/':
                res= prevInput/input;
                break;
                
     }
    setResult(res);
    setOperation('');
    setInput('');
    setPrevInput('')
  }

  return (
    <div style={{ textAlign: 'center' }}>
    <h2>RESULT is: {result}</h2>
    <h4>{prevInput}{operation}{input}</h4>
    <div
      style={{
        display: 'flex',               // Use Flexbox
        justifyContent: 'center',      // Center horizontally
        alignItems: 'center',          // Center vertically
        height: '400px',               // Ensure the parent has height
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 2fr)',
          width: '400px',
          height: '100%',               // Set to 100% to fill the parent
          gap: '5px',
        }}
      >
        {value.map((val, index) => (
          <div
            key={index}
            style={{
              width: '95px',
              height: '95px',
              border: '1px solid blue',
              display: 'flex',            // Center content inside the box
              justifyContent: 'center',   // Center horizontally
              alignItems: 'center',       // Center vertically
            }}
            onClick={() => handleClick(val)}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
    <button onClick={handleSubmit}>Submit</button>
  </div>
    //   {/* <div style={{display:'grid',gridTemplateColumns:'repeat(4, 2fr)', width:'800px',height:'400px',gap:'5px'}}>
    //     {value.map((value, index) => (
    //       <div key={index} style={{width:'95px',height:'95px', border:'1px solid blue'}} onClick={()=>handleClick(value)} >
    //          {value}
    //       </div>
    //     ))}
    //   </div>
    //   <button onClick={handleSubmit}>Submit</button> */}
  );
};

export default Calculater;

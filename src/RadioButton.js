// Make three radio buttons with labels red, blue, and yellow and add a div below it .
//  When I click on any radio button the color of the div should change ,for example ,
//   if I click on red the colour should be red. Add feature that 
// if I click on two radio buttons the colour of div should be mixture of those colours.

//Working as expected

import { useState } from "react";

const RadioButton=()=>{
    const [value,setValue]=useState([])

    const handleInput=(e)=>{
        setValue(prev=>
            prev.includes(e.target.value)?
             prev.filter(res=>res!=e.target.value)
            :
            [...prev,e.target.value])
    }

    return(<>
    <label>
    <input type="checkbox" value="red" onClick={handleInput}></input>
    Red
    </label>
    <label>
    <input type="checkbox" value="blue" onClick={handleInput}></input>
    Blue
    </label>
    <label>
    <input type="checkbox" value="yellow" onClick={handleInput}></input>
    Yellow
    </label>
    <div style={{height:'40px',border:'1px solid pink', background: value.length === 0?'':value.length === 1 
      ? value[0] 
      : `linear-gradient(45deg,${value.join(',')})`}}
    ></div>
    </>)
}

export default RadioButton;
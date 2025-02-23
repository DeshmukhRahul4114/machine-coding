import React, { PureComponent, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Progressbar=()=> {
    const [progress,setProgress]=useState(false);
    const [width,setWidth]=useState(0)
    const ref=useRef(null)
    let timeInterval;
    const handleProgressBar=()=>{
        // let width=0;
        ref.current=setInterval(()=>{
            const progressIdDiv=document.getElementById('progressId');
            setWidth(pre=>pre+10)
            // console.log(width,"width", progressIdDiv.style.width)
            // // width=width+10;
            // progressIdDiv.style.width=width+'px';
         },1000)
    }
    
    const handleProgressBarStop=()=>{
        clearInterval( ref.current)
    }


        return (
            <div>
                <div id='progressId' style={{width:`${width}px`,height:'20px',backgroundColor:'green'}}> {width}</div>
                <button onClick={handleProgressBar}>Start</button>
                <button onClick={handleProgressBarStop}>Stop</button>
            </div>
        );
    }

export default Progressbar;
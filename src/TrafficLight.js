import React, { useEffect, useState } from 'react';

const TrafficLight = () => {
const [light,setLight]=useState('')
const [lightYellow,setLightYellow]=useState('white')
const [lightRed,setLightRed]=useState('white')

useEffect(()=>{
    let count = 0;
    const interval = setInterval(() => {
      if (count <= 60) {
        setLight("green");
      } else if (count > 60 && count <= 80) {
        setLight("yellow");
      } else if (count > 80 && count <= 90) {
        setLight("red");
      } else {
        count = 0;
        setLight('')
      }
      count++;
      console.log(count)
    }, 100); // Slower speed for visibility

    return () => clearInterval(interval);
},[])

    return (
        <div style={{display:'flex',width:'50px',flexDirection:'column',border:'1px solid red',backgroundColor:'black'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:light==='green'?'green':'white'}}></div>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:light==='yellow'?'yellow':'white'}}></div>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:light==='red'?'red':'white'}}></div>
        </div>
    );
};

export default TrafficLight;
import React from "react";
import { useState } from "react";

const calculateWinner=(data)=>{
const winnerArray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
for(let i=0;i<winnerArray.length;i++){
    let win=winnerArray[i];
    // for(let j=0;j<win.length;j++){
    //     if(data[j])
    // }
    if(data[win[0]]&&data[win[1]]===data[win[0]]&&data[win[1]]===data[win[2]]){
        return data[win[0]];
    }
}
return ''

}

const TicTocToe = () => {
  const [data, setData] = useState(Array(9).fill(0));
  const [flag,setFlag]=useState(false);

  const handleClick=(id)=>{
    let newData=[...data];
    newData[id]=flag?'X':'O';
    setData(newData)
    setFlag(prev=>!prev); 
  }

  let winner=calculateWinner(data)

  console.log(data);
  return (
    <>
    {winner}
    <div
      style={{
        margin:'0 auto',
        width: "303px",
        height: "100%",
        display: "grid",
        gridTemplateColumns: 'repeat(3, 2fr)',
        border: "1px solid red",
      }}
    >
      {data.map((item, id) => {
        return (
          <div
            key={id}
            style={{
              height: "100px",
              width: "100px",
              border: "1px solid green",
              alignItems:'center',
            }}
            onClick={()=>handleClick(id)}
          >
            {item?item:''}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default TicTocToe;

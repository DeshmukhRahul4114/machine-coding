import React, { useState } from "react";

const calculation=(arr)=>{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(arr[a]&&arr[a]===arr[b]&&arr[c]===arr[a])
        {
            return arr[a]
        }
      }
      return null;


}

const TicTocToe = () => {
  const [arr, setArr] = useState(Array(9).fill(0));
  const [flag, setFlag] = useState(false);

  const handleChange=(index)=>{
    const a=[...arr];
    if(!a[index]){
        a[index]=flag?'X':'O'
    }
     setArr(a);
     setFlag(prev=>!prev)
    }
    console.log(arr,flag,'arr')

  const res=calculation(arr);
  const Winner =res?'X winner':'O winner'

  return (
    <>
    {Winner}
    <div style={{ height:'400px',width:'300px',display:'grid',gridTemplateColumns:'repeat(3, 2fr)',border:'1px solid red'}}>
      {arr.map((val, index) => (
        <div style={{width:'90px',height:'120px',border:'1px solid blue'}} onClick={()=>handleChange(index)}>
          {val?arr[index]:''}
        </div>
      ))}
    </div>
    </>
  );
};

export default TicTocToe;

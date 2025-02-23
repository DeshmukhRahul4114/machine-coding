import React,{useState} from 'react';

const MultiSelcet = () => {
    const [citys,setCitys]=useState([])
    const data= [{id:1,country:"india",city:['banglore','hydrbad','pune']},
    {id:2,country:"pakistan",city:['karachi','lahore','islamabad']},
    {id:3,country:"USA",city:['London','Loss angless','derma']}

]
const handleCity=(e)=>{
    const country1=e.target.value;
    console.log('country1',country1)
    const res=data.filter((value)=>value.country===country1)[0].city;
    console.log(res,'res11')
    setCitys(res)
}

return (
        <div>
            
                <select onChange={handleCity}>
{ data.map((vale,index)=>(
<option key={index} value={vale.country}>{vale.country}</option>
))}
                </select>
               {
                citys.length>0&&<select>
{ citys.map((vale,index)=>(
<option key={index} value={vale}>{vale}</option>
))}
                </select>
               }
    
        </div>
    );
};

export default MultiSelcet;
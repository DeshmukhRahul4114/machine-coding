import React from 'react';

const Carousal = () => {
    const data=[{id:1,text:'Carousal 1'},{id:2,text:'Carousal 2'},{id:3,text:'Carousal 2'}]

    return (
        <div>
            <button onClick={handleLeft}>{"<"}</button>
            {
                data.map((value,index)=>(
                    <div key={value.id}>{value.text}</div>
                ))
            }
            <button onClick={handleRight}>{">"}</button>
        </div>
    );
};

export default Carousal;
import React, { useState } from 'react';

const MultiSelect = () => {
    const [data,setData]=useState([]);
    const handleChange=(e)=>{
        const selectedValues = Array.from(e.target.selectedOptions, (option) =>
            option.value
          );
          setData(selectedValues);
    }
    return (
        <div>
            <select multiple value={data} onChange={handleChange}>
               <option value={1}>option 1</option>
               <option value={2}>option 2</option>
               <option value={3}>option 3</option>
               <option value={4}>option 4</option>
               <option value={5}>option 5</option>
               <option value={6}>option 6</option>
            </select>
            <p>Selected values: {data.join(", ")}</p>
        </div>
    );
};

export default MultiSelect;
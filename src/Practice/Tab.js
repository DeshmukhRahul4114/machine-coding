import React, { useState } from "react";

const tabs = [
  { id: 1, lable: "tab1", content: "tab 1 content" },
  { id: 2, lable: "tab 2", content: "tab 2 content" },
  { id: 3, lable: "tab 3", content: "tab 3 content" },
];

const Tab = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTab = (e) => {
    console.log(e.target.dataset.value,"e.target.dataset.value")
    setTabValue(Number(e.target.dataset.value));
  };

  console.log(tabValue, "tabValue");
  return (
    <div     style={{
        // display: "flex",
        // alignItems:"center",
        // flexDirection:'column'
        width:'300px',
        margin:"0 auto"
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "40px",
          alignContent:'center',
          width: "fit-content",
          backgroundColor: "lightgrey",
          gap: 10,
          padding:"0 10px"
        }}
      >
        {tabs.map((val, index) => {
          console.log("tabValue === index ",typeof index,typeof tabValue,tabValue === index )
          return <>
            <div
              data-value={index}
              onClick={handleTab}
              style={{ backgroundColor: tabValue === index ? "orange" : "" }}
            >
              {val.lable}
            </div>
          </>
})}
      </div>
      <div>{tabs[tabValue].content}</div>
    </div>
  );
};

export default Tab;

//facing issue in target value in how make separet content

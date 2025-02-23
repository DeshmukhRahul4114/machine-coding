import React, { useState } from "react";
import { objData } from "./Data";

const NestedObject = () => {
  const [data, setData] = useState(objData);

  const handelChange = (e) => {
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        address: { ...prev.profile.address, zip: e.target.value },
      },
    }));
  };

  return (
    <div>
      {JSON.stringify(data)}
      <input type="text" onChange={handelChange} />
    </div>
  );
};

export default NestedObject;

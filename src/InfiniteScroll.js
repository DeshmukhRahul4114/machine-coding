import React, { useCallback, useEffect, useState } from "react";

const mockData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const arr =  Array.from(
        { length: 20 },
        (_, index) => `Item name ${index}`
      );
      res(arr);
    }, 500);
  });
};

const InfiniteScroll = () => {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);

  const functionInfiniteScroll = useCallback(async () => {
    setFlag(true)
    const data = await mockData();
    setData((prevState) => [...prevState, ...data]);
    setFlag(false);
},[]);

  useEffect(()=>{
    functionInfiniteScroll();
  },[])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        functionInfiniteScroll();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [functionInfiniteScroll]);

  return (
    // <div style={{width:'300px',height:'200px',overflowY:'auto'}}>
    <div>
      <ul>
        {data.map((value) => (
          <li >{value}</li>
        ))}
      </ul>
      <div> {flag && "Loading"}</div>
    </div>
  );
};

export default InfiniteScroll;



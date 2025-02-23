import React, { useEffect, useRef, useState } from "react";
const Carousel = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 3);
    }, 5000);
    return () => clearInterval(ref.current);
  }, []);

  const handlePre = () => {
    let val = Math.abs(count - 1) % 3;
    setCount(val);
  };

  const handleNext = () => {
    let val = (count + 1) % 3;
    setCount(val);
  };

  const data = [
    { id: 0, desc: "Name 1" },
    { id: 1, desc: "Name 2" },
    { id: 2, desc: "Name 3" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          border: "1px solid red",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button onClick={handlePre}>{"<"}</button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "200px",
            height: "200px",
            border: "1px solid blue",
            width: "75%",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {data.map(
            (val, index) =>
              count === val.id && (
                <div
                  style={{
                    border: "1px solid yellow",
                    backgroundColor:
                      count % 3 === 0
                        ? "pink"
                        : count % 3 === 1
                        ? "blueviolet"
                        : "cyan",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {val.desc}
                </div>
              )
          )}
        </div>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </>
  );
};

export default Carousel;

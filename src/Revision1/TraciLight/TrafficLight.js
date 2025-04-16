import React, { useEffect, useState } from "react";
import "./TrafficLight.css";

const Color = {
  0: "green",
  1: "yellow",
  2: "red",
  3: "gray",
};

const TrafficLight = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 80 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getColor = (count) => {
    if (count <= 60) return Color[0];
    if (count <= 75) return Color[1];
    if (count <= 80) return Color[2];
    return Color[3];
  };

  const CircleDiv = ({isActive, color }) => {
    console.log(count,"caount")
    return <div className={`container ${isActive}? ${color}`} style={{background:isActive? color:'gray'}}  />;
  };

  return (
    <div className="container">
      <CircleDiv isActive={getColor(count)===Color[0]} color={Color[0]} />
      <CircleDiv isActive={getColor(count)===Color[1]} color={Color[1]} />
      <CircleDiv isActive={getColor(count)===Color[2]} color={Color[2]} />
    </div>
  );
};

export default TrafficLight;

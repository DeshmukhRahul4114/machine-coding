// import React, { useEffect, useState } from 'react';
// import './ProgressBarClick.css'

// const ProgressBarClick = () => {
//     const [progressContainer,setProgressContainer]=useState([])

//     // const progressBar=()=>{
//     //     return (
//     //         <div className='progressContainer'/>
//     //     )
//     // }

//     useEffect(()=>{

//     })

//    const handleClick=()=>{
//        setProgressContainer((prev)=>[...prev,<div className='progressContainer'/>])
//    }
//    const handleClear=()=>{
//        setProgressContainer([])
//    }

//     return (
//         <div>
//             <button onClick={handleClick}>ADD</button>
//             <button  onClick={handleClear}>Clear</button>
//             {
//                 progressContainer.map((progress)=>(
//                     progress
//                 ))
//             }
//         </div>
//     );
// };

// export default ProgressBarClick;
import React, { useState, useEffect } from "react";
import "./ProgressBarClick.css";

const ProgressBarClick = () => {
  // Each bar is an object: { id, status }
  const [bars, setBars] = useState([]);

  // Count how many bars are actively animating
  const activeCount = bars.filter((bar) => bar.status === "active").length;

  // Add a new progress bar: if fewer than 3 active, set as "active", else "queued"
  const handleAdd = () => {
    const newBar = {
      id: Date.now(),
      status: activeCount < 3 ? "active" : "queued",
    };
    setBars((prev) => [...prev, newBar]);
  };

  // Clear all progress bars
  const handleClear = () => {
    setBars([]);
  };

  // Called when a bar's progress reaches 100%
  const markComplete = (id) => {
    setBars((prev) =>
      prev.map((bar) => (bar.id === id ? { ...bar, status: "complete" } : bar))
    );
  };

  // Whenever bars update, if there's room for an active bar, promote the next queued bar.
  useEffect(() => {
    const activeCount = bars.filter((bar) => bar.status === "active").length;
    if (activeCount < 3) {
      const queuedIndex = bars.findIndex((bar) => bar.status === "queued");
      if (queuedIndex !== -1) {
        const newBars = [...bars];
        newBars[queuedIndex] = { ...newBars[queuedIndex], status: "active" };
        setBars(newBars);
      }
    }
  }, [bars]);

  return (
    <div>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleClear}>Clear</button>
      <div className="progress-bars-container">
        {bars.map((bar) => (
          <ProgressBar
            key={bar.id}
            status={bar.status}
            onComplete={() => markComplete(bar.id)}
          />
        ))}
      </div>
    </div>
  );
};

const ProgressBar = ({ status, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only animate if the bar is active
    if (status !== "active") {
      return;
    }
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1; // Adjust the increment for desired speed
      });
    }, 50); // Adjust the interval for animation speed

    return () => clearInterval(interval);
  }, [status, onComplete]);

  // For rendering:
  // - "queued" bars show 0%
  // - "active" bars show their current progress
  // - "complete" bars show 100%
  const displayProgress =
    status === "queued" ? 0 : status === "complete" ? 100 : progress;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${displayProgress}%` }}></div>
    </div>
  );
};

export default ProgressBarClick;

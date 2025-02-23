import React, { useEffect, useState } from 'react';

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const Debouncing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 1000); // 1 second throttle

  useEffect(() => {
    window.addEventListener('scroll', throttle(() => {
    setScrollPosition(window.scrollY);
  }, 1000));
    return () => window.removeEventListener('scroll', throttle(() => {
    setScrollPosition(window.scrollY);
  }, 1000));
  }, [throttle(() => {
    setScrollPosition(window.scrollY);
  }, 1000)]);

  return (
    <div style={{ height: '2000px' }}>
      <h1>Scroll Position: {scrollPosition}px</h1>
    </div>
  );
};

export default Debouncing;

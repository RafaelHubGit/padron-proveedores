import { useState, useEffect, useRef } from 'react';

const useDivHeight = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = (entries) => {
      for (let entry of entries) {
        if (entry.target === ref.current) {
          setHeight(entry.contentRect.height);
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, height];
};

export default useDivHeight;



// uso del hook ejemplo 

// const [divRef, divHeight] = useDivHeight();

// <div>
//       <div ref={divRef} style={{ height: '100px', backgroundColor: 'lightblue' }}>
//         Div to measure
//       </div>
//       <div style={{ marginTop: '20px', backgroundColor: 'lightcoral' }}>
//         The height of the above div is: {divHeight}px
//       </div>
// </div>
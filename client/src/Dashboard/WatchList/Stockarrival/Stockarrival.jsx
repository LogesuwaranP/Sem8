import React, { useState, useEffect } from 'react';
import "./Stockarrival.css";
function Stockarrival() {
  const [count, setCount] = useState("00");
  const [animate, setAnimate] = useState(false);
   var time= "30";
  function handleClick (){
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, (time*1000)); // set the timeout to the duration of the animation (in milliseconds)
  };

  useEffect(() => {
    function handleIntervalMessage(event) {
      if (event.data && event.data.type === 'startInterval') {
        setCount(time);
        handleClick();
        startInterval();
      }
    }

    function startInterval() {
        const intervalId = setInterval(() => {
          setCount(count => {
            if (count > 0) {
              return count - 1;
            } else {
                alert("Stock Arrived")
                setCount("00");
              clearInterval(intervalId);
              return count;
            }
          });
        }, 1000);
      

      return () => {
        clearInterval(intervalId);
      };
    }

    window.addEventListener('message', handleIntervalMessage);

    return () => {
      window.removeEventListener('message', handleIntervalMessage);
    };
  }, []);

  return (
    <div className={`animated-box ${animate ? 'in' : ''}`} style={{ "--animation-time":  `${time}s` }} >
      
        <div className='Stock-arrival'>
          <h3>Stock Arrival</h3>
          <div className='Stock-time'>
            <h4>Time : 00:00:{count}</h4>

          </div>
        </div>
    </div>
    
  );
}

export default Stockarrival;

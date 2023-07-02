import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './Target.css';

 function Target() {

    
    var week=5;
    let color;
    let text;
    const [refresh, setRefresh] = useState(true);
    const [percentage, setPercentage ] = useState(0);

    const [sale , setSale] = useState([]);
  
    if (percentage < 75) {
      color = "255, 1, 1";
      text = "Not Achived";
    } else if (percentage < 100) 
    {
      color = "231, 234, 104";
      text = "is Close";

    } else {
      color = "5, 255, 1";
      text = "Achived" ;
    }

    
  useEffect(() => {


    axios.get('http://localhost:8080/sales').then((response)=>{
        console.log(response.data);
        setSale(response.data[week-1]);   
        const sales = parseInt(response.data[week-1].Returns);
        const target = parseInt(response.data[week-1].Targets);
        const per = (sales / target) * 100;
        setPercentage(per);  
    });
    // const intervalId = setInterval(() => {
      
    //     sales = Math.ceil(Math.random() * 1500);
    //     // Set the new percentage value
    //     setPercentage((sales/target)*100);
  
        
    //   }, 5000);
    // Clean up the interval on unmount
    // return () => clearInterval(intervalId);






  }, [refresh]);



    

  return (

      <div style={{ backgroundColor:  `rgba(${color}, 0.192)` }} className="Target-container">
        <div className='Target-main'>
          <h3 style={{color:`rgb(${color})`}}>Target</h3>
          <p  > Target {text} {percentage.toFixed(2)}% </p>

          <div className="Loading">
          <div
          className="Loading-after"
          style={{ backgroundColor:  `rgb(${color})` , width:`${percentage}%` }}
          ></div>
          </div>
        </div>

      </div>
  )
}

export default Target;

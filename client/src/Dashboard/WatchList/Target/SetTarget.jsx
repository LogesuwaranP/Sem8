
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './SetTarget.css';

 function SetTarget() {

    
    var week=5;
    let color;
    let text;
    const [refresh, setRefresh] = useState(true);
    const [percentage, setPercentage ] = useState(0);
    const [newTarget, setNewTarget] = useState(0);
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

  const set=()=>{

    if(newTarget<1)
    {
      alert("Enter a valid target ")
      return;
    }

    console.log(newTarget);
    axios.put(`http://localhost:8080/sales/target/${week}`,{

    target:newTarget
  
    }).then(()=>{
      
      alert("Target set "+newTarget);
      setRefresh(!refresh);
  
    }); 
  }

    

  return (

      <div style={{ backgroundColor:  `rgba(${color}, 0.192)` }} className="S-container">
        <div className='S-main'>
          <h3 style={{color:`rgb(${color})`}}>TARGET</h3>
          <p  style={{color:`rgb(${color})`}}> WeeK {week}  </p>


          <div className="S-flex">
                <p className='S-PStyle'>Old Target </p>
                <h3>&#8377;{sale.Targets}</h3>
          </div>
          <div className="S-flex">
                <p className='S-PStyle'>Sales Running Now </p>
                <h3>&#8377;{sale.Returns}</h3>
          </div>
          <div className="S-flex">
                <p className='S-PStyle'>Set New Target </p>
                <input type="text" onChange={(e)=>setNewTarget(e.target.value)}/>
          </div>
          <button className="S-button" onClick={set}>Change Target</button>

          
          <p  style={{color:`rgb(${color})`}}> Target {text} {percentage.toFixed(2)}% </p>


          <div className="S-Loading">
          <div
          className="SLoading-after"
          style={{ backgroundColor:  `rgb(${color})` , width:`${percentage}%` }}
          ></div>
          </div>
        </div>

      </div>
  )
}

export default SetTarget;

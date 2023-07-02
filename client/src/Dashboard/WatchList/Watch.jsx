import React,{useState, useEffect} from 'react';
import './Watch.css';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Stockarrival from './Stockarrival/Stockarrival';
import Target from './Target/Target';

function Watch() {

  const navigate = useNavigate();

  const [best, setBest] = useState([]);
  const [profit, setProfit] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:8080/demo').then((response)=>{
      // console.log(response.data);
      setBest(response.data[0]);     
    });
    Axios.get('http://localhost:8080/demo').then((response)=>{
      // console.log(response.data[1]);
      setProfit(response.data[1]);     
    });

  },[]);
  
  return (

    <div className='watch-main'>
      <div className='Best-Selling' onClick={()=>navigate("/dashboard/bestselling")}>
        <div >
           <h3>Best Selling</h3>
  
        </div>

        {
              best.map((Item)=>{
                return(
                      <div className='watch-contant1'>
                        <p>{Item.productName}</p>
                        <span>{Item.soldOut}</span>
                      </div>
                )
              })
         }


      </div>
      <div className='Profitable' onClick={()=>navigate("/dashboard/highprofitable")}>
        <div >
           <h3>High Profitable</h3>
  
        </div>
        {
              profit.map((Item)=>{
                return(
                      <div className='watch-contant1'>
                        <p>{Item.productName}</p>
                        <span>&#8377;{Item.totalProfit}</span>
                      </div>
                )
              })
         }
      </div>
      <div  className='Target-box'  onClick={()=>navigate("/dashboard/settarget")}>
         <Target/>

      </div> 
      
      <div className= 'Stock-time'>
        <Stockarrival/>

      </div>


     
    </div>
  );
}

export default Watch;

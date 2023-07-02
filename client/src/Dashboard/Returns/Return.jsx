import React,{useEffect, useState} from "react";
import './Return.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import  Axios  from "axios";


function Return() {

  const at = 1000;
  var flist =[];
  const [value, sestValue] = useState(100);
  const [cdata, setCdata] = useState(0);
  useEffect(()=>{
    Axios.get('http://localhost:8080/sales').then((response)=>{
      console.log(response.data[4].Returns); 
      sestValue(response.data[4].Returns);
    });

    Axios.get('https://api.thingspeak.com/channels/2053365/feeds.json?api_key=0PU6PZX4M6D9T4YQ').then((response)=>{
              
    flist = (response.data.feeds);  
    let num=99;  
    // console.log(flist); 
    // console.log(flist[num].field5); 
    if(flist[num].field5==='')
    {
      setCdata(0);
    }
    else if(parseInt(flist[num].field5)>0)
    {
      setCdata(parseInt(flist[num].field5))
    }
    // setCdata(parseInt(flist[90].field5))


  });
 

  },[]);
  const data = [
    {
      name: "B1",
      Return: at,
    },
    {
      name: "B2",
      Return: 3000,
    },
    {
      name: "B3",
      Return: 2000,
    },
    {
      name: "B4",
      Return: 2780,
    },
    {
      name: "B5",
      Return: value,
    },
    {
      name: "B6",
      Return: 2390,
    }

  ];
  return (
    <div className='return-main'>

      <div className='return-inner'>
      <BarChart
      width={380}
      height={230}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: -10,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={{ stroke: "aliceblue", fontSize: "12px", fontWeight: "small", fontFamily: "Arial" ,fill: 'aliceblue' }} dataKey="name" />
      <YAxis tick={{ stroke: "aliceblue", fontSize: "12px", fontWeight: "small", fontFamily: "Arial" ,fill: 'aliceblue' }}  axisLine={{ stroke: "white" }} />
      <Tooltip />
      <Bar type="monotone" dataKey="Return" stroke="#000" fill="#87bdd8" barSize={30}/>
      </BarChart>
     

      </div>
      
     
    </div>
  );
}

export default Return;

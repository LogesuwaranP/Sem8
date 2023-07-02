import React,{useEffect, useState} from "react";
import './Sales.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import  Axios  from "axios";


export default function Sales() {

  var rt=50;
  var flist =[];
  const [value, setValue] = useState(100);
  const [cdata, setCdata] = useState(0);
  useEffect(()=>{
    Axios.get('http://localhost:8080/sales').then((response)=>{
      console.log(response.data[4].Returns); 
      rt = response.data[4].Returns;
      setValue(response.data[4].Returns);
    });

    Axios.get('https://api.thingspeak.com/channels/2053365/feeds.json?api_key=0PU6PZX4M6D9T4YQ').then((response)=>{
              
      flist = (response.data.feeds);      
      let num=99;
      console.log(flist[90]); 
      if(flist[num].field5==='')
      {
        setCdata(0);
      }
      else if(parseInt(flist[num].field5)>0)
      {
        setCdata(parseInt(flist[num].field5))
      }


    });
 

  },[]);

  const data = [
    {
      name: "",
      Profit: 0,

      amt: 610
    },
    {
      name: "WEEK 1",
      Profit: 2200,

      amt: 510
    },
    {
      name: "WEEK 2",
      Profit: 2500,

      amt: 210
    },
    {
      name: "WEEK 3",
      Profit: 1100,

      amt: 290
    },
    {
      name: "WEEK 4",
      Profit: 500,

      amt: 200
    },
    {
      name: "WEEK 5",
      Profit: value,

      amt: 218
    },
    {
      name: "WEEK 6",
      Profit: 1200,

      amt: 250
    },
    {
      name: "WEEK 7",
      Profit: 1500,
      amt: 250
    },
    {
      name: "WEEK 8",
      Profit: 2000,
      amt: 250
    },
    {
      name: "",
      Profit: ((11000+value)/8),
      amt: 210
    }
  ];
  return (
    <div className="sales-main">
      <h1>Sales</h1>
      <AreaChart
      width={645}
      height={230}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{stroke:"aliceblue", fontSize: "12px", fontWeight: "small", fontFamily: "Arial",fill: 'white'}}/>
      <YAxis tick={{stroke:"aliceblue", fontSize: "14px", fontWeight: "small", fontFamily: "Arial",fill: 'aliceblue'}}/>
      <Tooltip />
      <Area type="monotone" dataKey="Profit" stroke="#000" fill="#D1A4FF" />
      {/* <Area type="monotone" dataKey="amt" stroke="#000" fill="#8884d8" /> */}
    </AreaChart>
     
    </div>
  );
}



import React, { useEffect } from 'react'
import Axios from 'axios';
function Directdata() {

    var list =[];

    useEffect(()=>{

      
        Axios.get('https://api.thingspeak.com/channels/2053365/feeds.json?api_key=0PU6PZX4M6D9T4YQ').then((response)=>{
            
        list = (response.data.feeds);    
        console.log(response.data.feeds[99]); 
        if(response.data.feeds[99].field1>19)
        {
            console.log("go");
        }


      });

     
  },[]);


  return (
    <div>
      
    </div>
  )
}

export default Directdata

import React,{useState, useEffect} from 'react';
import Axios from "axios";


function CloudData() {

  var index=95;
 
  const[data,setData] = useState([]);
  var list =[];
  var DB =[];
  const week = 5;

  const [count, setCount] = useState(0);

    useEffect(()=>{

      // Axios.get('https://api.thingspeak.com/channels/2053365/feeds.json?api_key=0PU6PZX4M6D9T4YQ').then((response)=>{

      //   list = (response.data.feeds[index]);  
      //   // console.log(response.data);
      //   setData(response.data.feeds[index]);

            
      //   Axios.get('http://localhost:8080/data').then((response)=>{

      //     DB = response.data  ;
      //     fun();
      //   });


      // });

      const interval = setInterval(() => {
          setCount(count + 1);
          Axios.get('https://api.thingspeak.com/channels/2053365/feeds.json?api_key=0PU6PZX4M6D9T4YQ').then((response)=>{

          list = (response.data.feeds[index]);  
          // console.log(response.data);
          setData(response.data.feeds[index]);

              
          Axios.get('http://localhost:8080/data').then((response)=>{

            DB = response.data  ;
            fun();
          });


        });


      }, 2000);

      clearInterval(interval)
      //Clearing the interval
      return () => clearInterval(interval);

       
    },[]);

    const fun =()=>{

      if(list.field1===""&&list.field2===""&&list.field3===""&&list.field4==="")
      {

        Axios.put(`http://localhost:8080/data/set`,{

              bis:1,
              soap:1,
              rice:1,
              oil:1

        }).then(()=>{
          
          

        });
         
         return;
      }

      //Biscuit
      if(list.field1>10&&DB[1].Biscuit===1)
      {
        const id=1;
        Axios.put(`http://localhost:8080/demo/buy/${id}`,{

          Profit:5,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:-1,
                soap:0,
                rice:0,
                oil:0

          }).then(()=>{

            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:5
            
            }).then(()=>{
              
              // alert("Biscuit updated");
          
            }); 
            

          });
          
      
        }); 

      }
      else if(list.field1===0&&DB[1].Biscuit===0)
      {
        const id=1;
        Axios.put(`http://localhost:8080/demo/cancel/${id}`,{

          Profit:5,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:1,
                soap:0,
                rice:0,
                oil:0

          }).then(()=>{
            
            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:-5
            
            }).then(()=>{
              
              // alert("Biscuit updated");
          
            }); 

          });
          
      
        }); 
      }

      //Soap
      if(list.field2>10&&DB[1].Soap===1)
      {
        const id=2;
        Axios.put(`http://localhost:8080/demo/buy/${id}`,{

          Profit:7,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:0,
                soap:-1,
                rice:0,
                oil:0

          }).then(()=>{
            
            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:7
            
            }).then(()=>{
              
              // alert("Soap updated");
          
            }); 

          });
          
        }); 

      }
      else if(list.field2===0&&DB[1].Soap===0)
      {
        const id=2;
        Axios.put(`http://localhost:8080/demo/cancel/${id}`,{

          Profit:7,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:0,
                soap:1,
                rice:0,
                oil:0

          }).then(()=>{
            
            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:-7
            
            }).then(()=>{
              
              // alert("Soap updated");
          
            }); 

          });
          
        });
      }

      //Rice
      if(list.field3>10&&DB[1].Rice===1)
      {
        const id=3;
        Axios.put(`http://localhost:8080/demo/buy/${id}`,{

          Profit:10,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:0,
                soap:0,
                rice:-1,
                oil:0

          }).then(()=>{
            
            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:10
            
            }).then(()=>{
              
              // alert("Rice updated");
          
            }); 

          });
          
        });
      }
      else if(list.field3===0&&DB[1].Rice===0)
      {
        const id=3;
        Axios.put(`http://localhost:8080/demo/cancel/${id}`,{

          Profit:10,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:0,
                soap:0,
                rice:1,
                oil:0

          }).then(()=>{
            
            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:-10
            
            }).then(()=>{
              
              // alert("Rice updated");
          
            }); 

          });
          
        });
      }

      //Oil
      if(list.field4>10&&DB[1].Oil===1)
      {
        const id=4;
        Axios.put(`http://localhost:8080/demo/buy/${id}`,{

          Profit:15,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:0,
                soap:0,
                rice:0,
                oil:-1

          }).then(()=>{
            
            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:15
            
            }).then(()=>{
              
              // alert("Oil updated");
          
            }); 

          });
          
        });
      }
      else if(list.field4===0&&DB[1].Oil===0)
      {
        const id=4;
        Axios.put(`http://localhost:8080/demo/cancel/${id}`,{

          Profit:15,
      
        }).then(()=>{

          Axios.put(`http://localhost:8080/data/buy`,{

                bis:0,
                soap:0,
                rice:0,
                oil:1

          }).then(()=>{
            
            Axios.put(`http://localhost:8080/sales/returns/${week}`,{

              return:-15
            
            }).then(()=>{
              
              // alert("Oil updated");
          
            }); 

          });
          
        });
      }


    }




    

  return (
    <div>
        {/* <div className='gbest-main'>

        <table>
            <tr>
                <th>field1</th>
                <th>field2</th>
                <th>field3</th>
                <th>field4</th>
                <th>field5</th>
                <th>field6</th>
                <th>field7</th>
                <th>field8</th>
                <th>ID</th>

            </tr>
                            <tr >
                                <td>{data.field1}</td>
                                <td>{data.field2}</td>
                                <td>{data.field3}</td>
                                <td>{data.field4}</td>
                                <td>{data.field5}</td>
                                <td>{data.field6}</td>
                                <td>{data.field7}</td>
                                <td>{data.field8}</td>
                                <td>{data.entry_id}</td>


                            </tr>
               
        </table>

        </div>
 */}
      
    </div>
  );
}

export default CloudData;

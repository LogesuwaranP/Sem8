import React, { useEffect , useState } from 'react'
import Axios from "axios";
import './cloud.css';

function UpdateDB() {

    const[data,setData] = useState([]);
    var testdt=[];
    var Demodata = [];

    useEffect(()=>{

        Axios.get('http://localhost:8080/data').then((response)=>{
            
            setData(response.data);   
            testdt = response.data;
            // console.log(testdt);
            Axios.get('http://localhost:8080/demo/all').then((response)=>{
                // console.log("demo data"); 
                Demodata = response.data  ;
            });

            if(testdt[0].Biscuit>10&&testdt[1].Biscuit===1)
            {
                const id=1;
                // console.log("Bis bought");
                Axios.put(`http://localhost:8080/demo/buy/${id}`,{

                    Profit:Demodata[id-1].profitperProduct,
                
                }).then(()=>{
                    Axios.get('http://localhost:8080/demo/all').then((response)=>{
                    console.count("buy"); 
                    Demodata = response.data;

                    Axios.put('http://localhost:8080/data/bis',{

                            bis:0
                            
                            }).then(()=>{
                                alert("sales added");
                            
                        });                       
                    });
                 // alert("Mail send");
             
                });                 
            }

            


        });



    },[]);

  return (
    <div>
        <h1>hello</h1>

        <div className='feed-img'>
            {/* <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" /> */}
        </div>
      
    </div>
  )
}

export default UpdateDB

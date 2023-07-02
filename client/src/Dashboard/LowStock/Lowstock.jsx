import React,{useState, useEffect} from 'react';
import './Lowstock.css';
import { demo } from '../../ShopingCart/data/sampledata';
import Axios from 'axios';
function Lowstock() {

  const [count, setCount] = useState(0);
  const [low, setLow] = useState([]);
  var N=0;
  var Week=5;


  console.log(count);

  useEffect(()=>{
    Axios.get('http://localhost:8080/demo/low').then((response)=>{
      console.log(response.data);
      setLow(response.data);     
    });
 

  },[]);


  
  const restore = async (id,old,email,cost) => {
       
       if(count===0)
       {
          alert("Enter Stock count");
          return;
       }
       window.postMessage({ type: 'startInterval' }, '*');



        console.log("restore"+id);
        N = parseInt(count)+old;
        console.log(N);


        Axios.put(`http://localhost:8080/sales/invesment/${Week}`,{

        invest: (cost*parseInt(count))


        }).then(()=>{
          alert("invesment"+(cost*parseInt(count)));

        }); 

        Axios.put(`http://localhost:8080/demo/stockrestore/${id}`,{

          // Email:email,
          Count:N

  
        }).then(()=>{
          alert("Mail send");

        }); 


      const res = await fetch("http://localhost:8080/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            count
        })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
        console.log("error")
    } 
    else {
        setCount(0);
        console.log("Email sent")
     }
   }

   const handleMsg=(e)=>{

    if(e.target.value>0&&e.target.value<1000)
    {
       setCount(e.target.value);
    }
    else
    {
       setCount(0);
       console.log(count);
    }
      
   }

  return (
    <div>
        {
          low.map((Item)=>{
              return(
                <div className="lowstockinfo">

                Low Stock Info
                
          
                <div className='lowstock-title'>
                  <div className='lowstock-img'>
                    <img src={demo[(Item.id-1)].Image} alt="" />
                  </div>
                  <div className='lowstock-product'>
                    <span>{Item.productName}</span>
                    
                  </div>
                </div>
          
                <div className='lowstock-price'>
                  <span>PRICE</span>
                  <span>${Item.costPrice}</span>
                  
          
                </div>
          
                <div className='lowstock-count'>
                  <span>STOCK</span>
                  <span>{Item.stockCount}</span>
          
                </div>
          
                <div className='lowstock-btn'>
          
                    <span onClick={()=>restore(Item.id,Item.stockCount,Item.mailId,Item.costPrice)} >RESTORE</span>
          
                    <span className='restore-input'>
                      <input value={count} type="text" onChange={handleMsg}/>
                    </span>
          
                </div>
                <div>
                  
                </div>
          
              
              </div>
              )
          })
       }
    
    </div>
  );
}

export default Lowstock;

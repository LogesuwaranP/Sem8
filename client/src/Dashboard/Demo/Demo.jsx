import React,{useEffect} from 'react'
import './Demo.css';
import Axios from 'axios';
import { demo } from '../../ShopingCart/data/sampledata';
function Demo() {

  var branch=1;
  var week=5;
  var data = [];
  useEffect(()=>{
    Axios.get('http://localhost:8080/demo/all').then((response)=>{
      console.log(response.data); 
      data = response.data  ;
    });
 

  },[]);


  const buy=(id)=>{
    if(id===5)
    {
      alert("This product is expired, Sorry we will update new products");
      return;
    }

  //Sales Returns update
  Axios.put(`http://localhost:8080/sales/returns/${week}`,{

  return:data[id-1].profitperProduct,

  }).then(()=>{
    
    alert("buy updated ");

  }); 

  //Branch returns update
  Axios.put(`http://localhost:8080/branch/returns/${branch}`,{

   Profit:data[id-1].profitperProduct,

  }).then(()=>{
    
    // alert(data[id-1].profitperProduct);

  }); 

  //Demo Update
  Axios.put(`http://localhost:8080/demo/buy/${id}`,{

   Profit:data[id-1].profitperProduct,

  }).then(()=>{
    Axios.get('http://localhost:8080/demo/all').then((response)=>{
      console.count("buy"); 
      data = response.data  ;
    });
    // alert("Mail send");

  }); 



  }
  return (
    <div className='demo-main'>
         {
                demo.map((Item) => {
                return (
                    <div className='demo'>
        
                        <div style={{ backgroundImage: `url(${Item.Image})`}} className='card-i'>

                        </div>
                        
                        <div className='demo-text' key={Item.ID}>
                            <h2>{Item.ProductName}</h2>
                            <h3>&#8377;{Item.Price}</h3>
                            <h3>{Item.ExpireDate}</h3>
                            <hr style={{width:"140px"}}/>
                            <button onClick={()=>buy(Item.ID)}>BUY</button>
                            
                        </div>
                    </div>

                        
                    )
                })
            }      
            
    </div>
  )
}

export default Demo;

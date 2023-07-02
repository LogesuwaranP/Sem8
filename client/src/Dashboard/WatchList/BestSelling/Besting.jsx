import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './Besting.css';
function Besting() {

    const[dlist,setDlist] = useState([]);



    useEffect(()=>{
        Axios.get('http://localhost:8080/demo').then((response)=>{
          console.log(response.data)
          setDlist(response.data[2]);     
        });

    
    },[]);

    

  return (
    <div>
        <div className='gbest-main'>

        <table>
            <tr>
                <th>Product Name</th>
                <th>Cost Price</th>
                <th>Selling Price</th>
                <th>Stock Count</th>
                <th>Sold Out</th>
                <th>Total Profit</th>
                <th>Dealer Name</th>
                <th>Mail Id</th>
                <th>Contact Info</th>
            </tr>
                {
                    dlist.map((Item)=>{
                        return(
                            <tr >
                                <td>{Item.productName}</td>
                                <td>{Item.costPrice}</td>
                                <td>{Item.sellingPrice}</td>
                                <td>{Item.stockCount}</td>
                                <td>{Item.soldOut}</td>
                                <td>{Item.totalProfit}</td>
                                <td>{Item.dealerName}</td>
                                <td>{Item.mailId}</td>
                                <td>{Item.contactInfo}</td>

                            </tr>
                        )
                    })
                }
               
        </table>

        </div>
      
    </div>
  )
}

export default Besting;

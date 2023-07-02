import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './Profitable.css';
function Profitable() {

    const[flist,setFlist] = useState([]);


    useEffect(()=>{
        Axios.get('http://localhost:8080/demo/high').then((response)=>{
          
          setFlist(response.data);     
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
                    flist.map((Item)=>{
                        return(
                            <tr >
                                <td>{Item.productName}</td>
                                <td>&#8377;{Item.costPrice}</td>
                                <td>&#8377;{Item.sellingPrice}</td>
                                <td>{Item.stockCount}</td>
                                <td>{Item.soldOut}</td>
                                <td>&#8377;{Item.totalProfit}</td>
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

export default Profitable;

import React from "react";
import './Details.css';
import { fashion } from "../data/sampledata"; 
import { useLocation} from "react-router-dom";

function FDetails() {

    const location = useLocation();

    console.log(location.state);

    const i = location.state.fid-1;

 
  return (

    <div className="Details-Page">
        <h1 >Product Details</h1>
        <br></br>

               <div>

                    <table >
                    
                    <tr>

                        <th>Product Name</th>
                        <td>{fashion[i].ProductName}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>₹{fashion[i].Price}</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td>{fashion[i].Color}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>{fashion[i].ProductLocation}</td>
                    </tr>
                    <tr>
                        <th>Product Type</th>
                        <td>{fashion[i].ProductType}</td>
                    </tr>
                    <tr>
                        <th>Material</th>
                        <td>{fashion[i].Material}</td>
                    </tr>
                    <tr>
                        <th>Brand</th>
                        <td>{fashion[i].Brand}</td>
                    </tr>
                    <tr>
                        <th>Quality</th>
                        <td>{fashion[i].Quality}</td>
                    </tr>
                    <tr>
                        <th>Shipping and Returns</th>
                        <td>{fashion[i].ShippingReturns}</td>
                    </tr>
                    <tr>
                        <th>Size Fit</th>
                        <td>{fashion[i].SizeFit}</td>
                    </tr>

                    <tr>
                        <th>Material</th>
                        <td>{fashion[i].Material}</td>
                    </tr>
                    <tr>
                        <th>Care Instructions</th>
                        <td>{fashion[i].CareInstructions}</td>
                    </tr>
                    <tr>
                        <th>Design Style</th>
                        <td>{fashion[i].DesignStyle}</td>
                    </tr>
                    </table> 

                    </div>
                                

    </div>     
    
  );
}

export default FDetails;





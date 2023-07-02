import React from "react";
import { fashion } from "./sampledata";

// {
//     ID : 6,
//     Image: "https://example.com/images/product006.jpg",
//     ProductName:"Sneakers",
//     ProductType: "Footwear",
//     Material: "Suede",
//     Brand: "Brand Z",
//     DesignStyle: "Suede sneakers with a contrast sole",
//     SizeFit: "Available in US 6-10. Runs true to size.",
//     Color: "Beige",
//     Price: 5000,
//     Quality : "Made from genuine suede. Comfortable and stylish.",
//     CareInstructions : "Wipe clean with a damp cloth.",
//     ShippingReturns : "Free shipping on all orders. 30-day return policy."
//   },

const Display =()=> {
    return (
      <div >
        {
            fashion.map((Item) => {
            return (

                <div>
                    <h4>Image</h4>
                    <p><b>ProductName : </b>{Item.ProductName}</p>
                    <p><b>ProductType : </b>{Item.ProductType}</p>
                    <p><b>Material    : </b>{Item.Material}</p>
                    <p><b>DesignStyle : </b>{Item.DesignStyle}</p>
                    <p><b>SizeFit     : </b>{Item.SizeFit}</p>
                    <p><b>Color       : </b>{Item.Color}</p>
                    <p><b>Price       : </b>{Item.Price}</p>
                    <p><b>Quality     : </b>{Item.Quality}</p>
                    <p><b>CareInstructions : </b>{Item.CareInstructions}</p>
                    <p><b>ShippingReturns  : </b>{Item.ShippingReturns }</p>
                    <hr />
                    <hr />
                </div>
            )
            })
        }

      </div>

    );
  }
  
export default Display;
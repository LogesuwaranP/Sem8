import React from "react";
import Grocery from "./Grocery";
import { grocery } from "../data/sampledata";
const GList=()=> {
  
    return (
        <div>

            <div className="wrapper">
            {
                grocery.map((Item) => {
                    return (
                        <Grocery
                            img= {Item.Image}
                            title={Item.ProductName}
                            description= {Item.ExpireDate}
                            price={Item.Price}
                            fullDetails={Item}
                            key={Item.id}
                            id={Item.id}
                        />
                        
                    )
                })
            }
        
      </div>
    </div>
      
    );
  }

export default GList;
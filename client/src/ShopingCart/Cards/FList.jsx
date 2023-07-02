import React from "react";
import Fashion from "./Fashion";
import { fashion } from "../data/sampledata";


const FList=()=> {


    
    return (
        <div>
            <div className="header">
                <h2 className="title">Fashion List</h2>
            </div>
            
            <div className="wrapper">
            {
                fashion.map((Item) => {
                    return (
                        <Fashion
                            img= {Item.Image}
                            title={Item.ProductName}
                            color= {Item.Color}
                            price={Item.Price}
                            key={Item.ID}
                            id={Item.ID}
                        />
                        
                    )
                })
            }        
            </div>
        </div>
      
    );
  }

export default FList;
import React from "react";
import Grocery from "./Grocery";
import Fashion from "./Fashion";
import { grocery,fashion } from "../data/sampledata";
const List=()=> {

    
    return (
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
                        />
                        
                    )
                })
            }
            {
                fashion.map((Item) => {
                    return (
                        <Fashion
                            img= {Item.Image}
                            title={Item.ProductName}
                            color= {Item.Color}
                            price={Item.Price}
                            key={Item.ID}
                        />
                        
                    )
                })
            }


        
      </div>
    );
  }

export default List;
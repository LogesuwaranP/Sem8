import React from 'react';
import './Product.css';
import { useNavigate } from "react-router-dom";
  
function Product() {

    const navigate = useNavigate();

    const set=(e)=>{
       
        console.log("hi");
        console.log(e.target.value);
        navigate(e.target.value)
        
        }
  return (
    <div className="Product-main">

        <div className="Productlist">   

            <div className="dropdown">
            <select onChange={set}>
                <option value="/Shopping">All</option>
                <option value="/Shopping/grocery">Grocery</option>
                <option value="/Shopping/fashion">Fashion</option>
                <option >Electronics</option>
            </select>
            </div>
            <h2 className="title">Product List</h2>
            
            <button onClick={()=>navigate("/Shopping/more")}>More</button>           
        </div>
     
    </div>
  );
}
  
export default Product;
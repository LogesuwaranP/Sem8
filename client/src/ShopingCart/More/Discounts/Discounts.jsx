import React from "react";
import './Discounts.css';

function Discounts() {
  return (

    <div  className="discounts-main">

     <div className="discount">
            <h1>DISCOUNTS EXCLUSIVELY FOR YOU!!</h1>
        </div>
        <div className="container">
            <div className="coupon-card">
                {/* <img src="https://i.pinimg.com/originals/6c/20/21/6c2021852f91bedcb6c550c3033656b0.jpg" className="logo"/> */}
                <h3>20% flat off on all rides within the city<br/>using HDFC Credit Card</h3>
                <di className="coupon-row">
                    <span id="cpnCode">STEALDEAL20</span>
                    <span id="cpnBtn">Copy Code</span>
                </di>
                <p>Valid Till: 20Dec, 2023</p>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
        </div>
        </div>

    
  );
}

export default Discounts;
import React from 'react';
import { useNavigate } from "react-router-dom";
import './More.css';

function More() {

  const navigate = useNavigate();
  return (
    <div className='more-main'>
        <div className="header">

                <h1>More for Customers</h1>
                
            </div>
            <div className="row1-container">
                <div className="box box-down cyan">
                <h2>Explore</h2>                
                <p>Don't Miss out you may like this products</p>
                
                <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>

                <div className="box red" onClick={()=>navigate("/Shopping/more/discounts")}>
                <h2>Discounts</h2>
                <p>Don't worry You have Special discounts</p>                
                <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>

                <div className="box box-down blue">
                <h2>New Items</h2>
                <p>Here are some new products added. </p>
                <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>
            <div className="row2-container" onClick={()=>navigate("/Shopping/more/feedback")}>
                <div className="box orange">
                <h2>Feed Back</h2>
                <p>Ideas & Suggestions are Always welcomed!</p>
                
                <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                </div>
            </div>



    </div>
  );
}



export default More;
/*

<Card
        img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        title="Tie Up Boots"
        description="Fall Favorite • Boots"
        price="45.00"
      />
      
      


*/

import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.scss'


  
const Grocery =(props)=> {
  
  const navigate = useNavigate();
   
    return (
      <div className="card">
          <img src={props.img} className="card__img" alt=""/>
          <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">Exp : {props.description}</p>
          <h3 className="card__price">&#8377;{props.price}</h3>
          <button className="card__btn" onClick={()=>navigate("/Shopping/grocery/details",{state:{gid:props.id}})}>Details</button>
        </div>
      </div>
    );
  }
  
export default Grocery;


  
  /*
  
  <Card
          img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
          title="Tie Up Boots"
          description="Fall Favorite • Boots"
          price="45.00"
  />
        
        
  
  
  */
  
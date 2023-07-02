import React from "react";
import './Card.scss'
import { useNavigate } from "react-router-dom";

const Fashion =(props)=> {

  // const [fid,setFid] = useState(4);




  const navigate = useNavigate();
    return (
      <div className="card">
        <img src={props.img} className="card__img" alt=""/>
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.color}</p>
          <h3 className="card__price">&#8377;{props.price}</h3>
          <button className="card__btn" onClick={()=>{navigate("/Shopping/fashion/details",{state:{fid:props.id}})}}>Details</button>
        </div>
      </div>
    );
  }
  
export default Fashion;
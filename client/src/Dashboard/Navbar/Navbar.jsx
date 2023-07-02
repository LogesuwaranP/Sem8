import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();


  return (

    <div className="Nav-main">

        <div className='user-panel'>

            <div className='dashboard-main'>
                <div className='inner'>
                    <div className='icon'>
                       <img src="" alt="" />
                    </div>
                    

                   <p>Dashboard</p>
                </div>
                
                

            </div>

            <div className='shopping' onClick={()=>navigate("/Shopping")}>
            <div className='inner'>
                    <div className='icon'>
                       <img src="" alt="" />
                    </div>
                    

                   <p style={{color:'black'}}>Shopping</p>
                </div>


            </div>


        </div>


     
    </div>
  );
}

export default Navbar;

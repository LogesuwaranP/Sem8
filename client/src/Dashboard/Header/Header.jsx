import React from 'react';
import './Header.css';
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <div className="header-main">

            <div className='welcome'>
              <h4>Hello Logesuwaran</h4>
                <div className='real-time'>
                  <span onClick={()=>navigate("/dashboard/demo")}>Click for Demo</span>
                </div>
            </div>

     
    </div>
  );
}

export default Header;

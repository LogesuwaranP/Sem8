import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  }
   
//   const navigate = useNavigate();
  const [mailid, setUsername] = useState("");
  const [password, setPassword] = useState("");
const usertype = "User";

  const login = () => {
    const data = { mailid: mailid, password: password };
    axios.post("http://localhost:8080/auth/login", data).then((response) => {


      if(response.data.error)
      {
        alert(response.data.error);
        return;
      }


      if(response.data==="Admin")
      {
        navigate('/dashboard');
        console.log("Admin");
      }
      else if(response.data==="User")
      {
        navigate('/Shopping');
        console.log("User");
      } 
    });

    setUsername("");
    setPassword("");
  };

  const signup = () =>{

    axios.post("http://localhost:8080/auth",{
    
            mailid:mailid,
            password:password,  
            usertype:usertype   
    
        }).then((response)=>{
          alert(response.data);
        });

        setUsername("");
        setPassword("");


  }
 



  return (
    <div className="login-setup">
      <div className="login-main">
        <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={toggleCheckBox} />
        <div className="signup">
          <form>
            <label className="login-lable" htmlFor="chk" aria-hidden="true">Sign up</label>
            <input className="login-input" value={mailid} type="email" name="email" placeholder="Email" required onChange={(event) => {setUsername(event.target.value);}} />
            <input className="login-input" value={password} type="password" name="pswd" placeholder="Password" required onChange={(event) => {setPassword(event.target.value);}} />
          </form>
            <button className="login-button" onClick={signup}>Sign up</button>
        </div>
        <div className="login">
          <form>
            <label className="login-lable" htmlFor="chk" aria-hidden="true">Login</label>
            <input className="login-input" value={mailid} type="email" name="email" placeholder="Email" required onChange={(event) => {setUsername(event.target.value);}} />
            <input className="login-input" value={password} type="password" name="pswd" placeholder="Password" required onChange={(event) => {setPassword(event.target.value);}}/>
            
          </form>
            <button className="login-button" onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

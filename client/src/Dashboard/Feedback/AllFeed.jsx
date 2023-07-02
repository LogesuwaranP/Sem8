import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import './AllFeed.css';



function AllFeed() {


  const [list, setList] = useState([]);
  var add=0;
  const [sum, setSum] = useState(5);
  const image = ["https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg", 
                  "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
                  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVF6VJ9bs7dZYnS1svMvvaDOJxd9hI9JYt2vKjHUn4&s",
                  "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjc5MS10YW5nLTM1LnBuZw.png?s=aLxshBxLcykO2UAnr6F0Nzhqtdx6iR6UuKi4bFSTzC8"];

  const color =["255, 1, 1","255, 1, 1","255, 1, 1","231, 234, 104","231, 234, 104","5, 255, 1"]


  useEffect(()=>{
    
    Axios.get('http://localhost:8080/feedback/all').then((response)=>{
      setList(response.data);      
    })


  },[]);


  const dlt = (id) =>{
    const num = id;
    console.log(num);
    Axios.delete(`http://localhost:8080/feedback/${id}`,{

     

    }).then(()=>{
        
        alert("deleted");

    }); 
    
  }





  return (
    <div>
      <div className='AF-main'>

        <div className='AF-header'>
          <h3>Feedbacks</h3>

       
        </div>
        <div className='AF-contant'>
            <div className='AF-title'>
              <span className='AF-user-id'>FEED ID</span>
              <span >PROFILE</span>
              <span className='AF-user-name-title'>USER NAME</span>
              <span className='AF-suggestion'>FEEDBACK</span>
              <span >RATING</span>       
            </div>
           {
              list.map((Item)=>{
                return(
                      <div>
                        <div className='AF-line'></div>
                        <div className='AF-feedback1'>
                          <span className='AF-user-id'>#{Item.id}</span>
                          <span className='AF-profile'  style={{ backgroundImage: `url(${image[Item.id%5]})`}}></span>
                          <span className='AF-user-name'>{Item.userName}</span>
                          <span className='AF-suggestion'>{Item.Suggestion}</span>
                          <span style={{backgroundColor:`rgba(${color[Item.Rating]}, 0.192)`,color:`rgba(${color[Item.Rating]}`}} className='AF-rating'>{Item.Rating}</span>
                          <span className='AF-delete' onClick={()=>dlt(Item.id)}><h1 >x</h1></span>
                        </div>
                      </div>
                )
              })
            }



            {/* <div className='feedback1'>
              <span className='user-id'>#12</span>
              <span className='profile'></span>
              <span className='user-name'>Logesuwaran</span>
              <span className='suggestion'>Need new  produ...</span>
              <span>5</span>
              
            </div>
            <div className='feedback1'>
              <span className='user-id'>#12</span>
              <span className='profile'></span>
              <span className='user-name'>Logesuwaran</span>
              <span className='suggestion'>Good I Love it</span>
              <span>5</span>
              
            </div> */}

        </div>

        
          

        </div>
        <div className='map'>
          
      
     
        </div>
    </div>
    
  );
}

export default AllFeed;

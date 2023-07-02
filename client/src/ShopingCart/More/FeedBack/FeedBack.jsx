import React, { useState } from 'react';
import './FeedBack.css';
import Axios from 'axios';


function Feedback() {
  const [moviename, setMoviename] = useState("");
  const [review, setreview] = useState("");
  const [rating, setRating] = useState("");


    const handleSubmit = () => {
        


        Axios.post("http://localhost:8080/feedback",{
    
          userName:moviename,
          Suggestion:review,  
          Rating:rating   
    
        }).then(()=>{
          alert("Thank you for your suggestion");
        });

        setMoviename("");
        setreview("");
        setRating("");

      };

      const handleName = (event) => {
    
        setMoviename(event.target.value)
        
      }
    
      const handleSubject = (event) => {
        
        setreview(event.target.value)
        
    
      }
      const handleRating = (event) => {
        
        setRating(event.target.value)
        
    
      }

    return(

        <div>
            <h3 className='FeedBack-title'>FeedBack</h3>

            <div className="container">

                <form >
                    <label for="name">Name</label>
                    <input type="text" value={moviename}onChange={handleName} placeholder="Your name.." />
                    <label for="subject">Your suggestions</label>
                    <textarea  value={review} onChange={handleSubject} placeholder="Write something...." style={{height:"300px"}}></textarea>
                    <input value={rating}type="text" onChange={handleRating} placeholder="Rating out of 5" />
                    <button  className="SugBtn" onClick={handleSubmit}>Submit</button>
                    
                </form>
                
                
            </div>

		</div>
	);
}

export default Feedback;

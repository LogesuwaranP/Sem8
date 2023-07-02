import React from 'react';
//import { gid } from '../Cards/Grocery';
import './CartList.css';

function CartList() {



    
    
    return (
        <div className='maincontain'>

            <div className='contain'>
            <img style={{width:'15%'}} src="https://media.istockphoto.com/id/1266949848/photo/smiling-hipster-gen-z-teen-girl-with-pink-hair-wear-hoodie-sit-on-bed-portrait.jpg?s=612x612&w=0&k=20&c=0XTrEBsvW_aNudZsqmYOcG5LiVbazd0CTv4pbAWIMGs=" alt="" />
            <h3 className='Product-Name'> T-shirt Cotton</h3>
            <h1 className='Price'>$2000</h1>
            <div className='btn'>
                <button className='b'>+</button>
            </div>
                    <h3 className='qun'>3</h3>
            <div className='btn'>
                    <button className='b'>-</button>
            </div>
            <h1 className='tPrice'>$6000</h1>

            
            </div>
            

        </div>
       
    )
}

export default CartList
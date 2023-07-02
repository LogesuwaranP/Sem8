import React from 'react';
import Feedback from './Feedback/Feedback';
import Header from './Header/Header';
import Lowstock from './LowStock/Lowstock';
import Navbar from './Navbar/Navbar';
import Return from './Returns/Return';
import Sales from './SalesAnalysis/Sales';
import './Dashboard.css';
import Watch from './WatchList/Watch';
import CloudData from '../Cloud/CloudData';


function DashBoard() {
  return (
    <div className="Template-main">
        <Navbar/>
        <Header/>

        <div className='main-page'>
            <Watch/>
            <div className='Returns-Feedback'>
                <Return/>
                <Feedback/>
            </div>
            <div className='Sales-Lowstock'>
                <Sales/>
                <Lowstock/>

            </div>

        </div>
        <CloudData/>

     
    </div>
  );
}

export default DashBoard;

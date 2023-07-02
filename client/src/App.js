import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Discounts from "./ShopingCart/More/Discounts/Discounts";
import More from './ShopingCart/More/More';
import Shoppingcart from "./ShopingCart/Shoppingcart";
import GDetails from './ShopingCart/ProductDetails/GDetails';
import FDetails from './ShopingCart/ProductDetails/FDetails';
import Feedback from "./ShopingCart/More/FeedBack/FeedBack";
import GList from "./ShopingCart/Cards/GList";
import FList from "./ShopingCart/Cards/FList";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Besting from "./Dashboard/WatchList/BestSelling/Besting";
import Profitable from "./Dashboard/WatchList/HighProfitable/Profitable";
import Demo from "./Dashboard/Demo/Demo";
import SetTarget from "./Dashboard/WatchList/Target/SetTarget";
import CloudData from './Cloud/CloudData';

import AllFeed from "./Dashboard/Feedback/AllFeed";


function App() {

  return (
    <div>
      
      <Router>
        <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/Shopping" element={<Shoppingcart />}/>
          <Route path="/Shopping/more" element={<More/>} />
          <Route path="/Shopping/grocery" element={<GList/>} />
          <Route path="/Shopping/fashion" element={<FList/>} />
          <Route path="/Shopping/more/feedback" element={<Feedback/>} />
          <Route path="/Shopping/more/discounts" element={<Discounts/>} />
          <Route path="/Shopping/grocery/details" element={<GDetails/>} />
          <Route path="/Shopping/fashion/details" element={<FDetails/>} />

          <Route path="/dashboard" element={<Dashboard/> }/>
          <Route path="/dashboard/bestselling" element={<Besting/> }/>
          <Route path="/dashboard/highprofitable" element={<Profitable/> }/>
          <Route path="/dashboard/settarget" element={<SetTarget/>}/>
          <Route path="/dashboard/demo" element={<Demo/> }/>
          <Route path="/dashboard/viewallfeed" element={<AllFeed/>}/>

          <Route path="/clouddata" element={<CloudData/>}/>
          
        </Routes>
      </Router>
    </div> 


    
    
  );
}

export default App;


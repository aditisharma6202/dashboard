import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Route } from "react-router-dom";
import { Routes } from "react-router";
// import ScrollIntoView from "./contents/scrollUp.js/scrollUp";
import reportWebVitals from './reportWebVitals';
import DashboardMain from './Dasboard';
import Product from './Dasboard/Inventory/Product/product';
import GroupType from './Dasboard/Inventory/GroupType/groupType';
import GroupF2 from './Dasboard/Inventory/Group/groupF2';
import Group from './Dasboard/Inventory/Group/group';
import GroupFormF2 from './Dasboard/Inventory/GroupType/groupformF2';
import TaxGroup from './Dasboard/Inventory/TaxGroup/taxGroup';
import Leadger from './Dasboard/Inventory/Leadger/leadger';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     {/* <ScrollIntoView> */}
      
        <Routes>
          <Route path="/" element={<DashboardMain />} />
          <Route path="/product" element={ <Product/>} />
          <Route path="/grouptype" element={ <GroupType/>} />
          <Route path="/grouptypeform" element={ <GroupFormF2/>} />
          <Route path='/groupf2' element={<GroupF2/>}/>
        <Route path='/group' element={<Group/>}/>
        <Route path='/taxgroup' element={<TaxGroup/>}/>

<Route path='/leadger' element={<Leadger/>}/>

        </Routes>
      
    {/* </ScrollIntoView> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

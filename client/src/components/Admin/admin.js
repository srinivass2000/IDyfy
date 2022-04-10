import React from 'react';
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import Tables from './tables/Tables';

const admin = () => {
  return (
    <div>
        <Navbar />  
        <Tables />
    </div>
  )
}

export default admin
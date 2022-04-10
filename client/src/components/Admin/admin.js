import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import Auth from "./auth/Auth";


const admin = () => {
  return (
    <div>
      <Route path="/admin" exact component={Auth} />
    </div>
  )
}

export default admin
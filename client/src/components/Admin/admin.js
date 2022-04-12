import React from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar2 from "./Navbar/Navbar2";
import Dashboard from "./dashboard/Dashboard";
//import Auth from "./auth/Auth";
import Project_table from "./tables/Project_table";
import User_table from "./tables/User_table";
const admin = () => {
  return (
    <div>
      {/* <Dashboard /> */}
      <Navbar2 />
      <Project_table />
      <User_table />
    </div>
  );
};

export default admin;

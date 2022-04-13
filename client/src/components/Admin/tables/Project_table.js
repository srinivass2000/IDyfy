import React from "react";
import { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar';
import authHeader from "../../../services/auth-header";
import axios from "axios";
//import Table from 'react-bootstrap/Table'

const Project_table = () => {
    const [ideas, setIdeass] = useState([]);
    
    const fetchIdea = () => {
      axios
        .get(`/api/admin/get-ideas`, {
          headers: authHeader(),
        })
        .then((res) => {
          setIdeass(res.data.active_ideas);
          //setContributors(res.data.contributed_users);
          console.log(res.data);
          //setLoad(false);
        })
        .catch((err) => console.log(err));
    };
    console.log(ideas);
    useEffect(() => {
      fetchIdea();
    }, []);
    

  return (
    <div>
       <div class="my-5"> 
        <div className="row my-3 mx-3">

        <div class="col-2 ">
            <div class="">
              <Navbar/>
            </div>
            
          </div>
        <div  class="col-10 ">
          <div class="my-5">
          <div
            className="mx-5 mb-3 shadow-lg  rounded-2"
            style={{ backgroundColor: "#BF51FF", color: "white", "fontWeight":"bolder" ,"fontSize":"2rem"}}
          >
            PROJECT TABLE
          </div>

          <div class="mx-5 shadow-lg rounded" style={{"background":"white"}}>
          <div class="table-responsive">
                      <table class="table">
    <thead>
      <tr>
        <th>Sr. No.</th>
        <th>Idea Name</th>
        <th>No. of Contributors</th>
        <th>No. of Likes</th>
        <th>No. of Comments</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table></div>
          </div>
        </div>
      </div>

        
      </div>
      </div>
    </div>
  )
}

export default Project_table;

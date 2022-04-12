import React from 'react'
import { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Navbar from '../Navbar/Navbar';
import authHeader from "../../../services/auth-header";
import axios from "axios";


const Project_table = () => {
    const [ideas, setIdeas] = useState([]);
    
    const getideas = async () => {
      try {
        // console.log(skip);
        await axios
          .get("/api/idea/get-ideas/", {
            headers: authHeader(),
          })
            // console.log(res.data.ideas);
              console.log(ideas);
      } catch (e) {
        console.log(e);
      }
    };

    const data = {
      columns: [
        {
          label: 'Sr. No.',
          field: 'id',
        },
        {
          label: 'Idea Name',
          field: 'heading0',
        },
        {
          label: 'No. of Contributors',
          field: 'heading1',
        },
        {
          label: 'No. of Likes',
          field: 'heading2',
        },
        {
          label: 'No. of Comments',
          field: 'heading3',
        },
      ],
      rows: [
        ideas
      ]
    };
  


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
          <MDBTable responsive>
            <MDBTableHead columns={data.columns} style={{backgroundColor: "#B787FF"}}/>
            <MDBTableBody rows={data.rows} />
          </MDBTable>
          </div>
        </div>
      </div>

        
      </div>
      </div>
    </div>
  )
}

export default Project_table;
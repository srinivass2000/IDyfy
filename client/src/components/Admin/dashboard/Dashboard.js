import React from 'react'
//import axios from "axios";
//import { useEffect } from "react";
import { useState } from "react";
import { Chart } from 'react-charts';
//import { Bar } from 'react-charts';
//import authHeader from "../../../services/auth-header";
import Navbar from '../Navbar/Navbar';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


const Dashboard = () => {

  const data1 = {
    columns: [
      {
        label: 'Sr. No.',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Idea Name',
        field: 'heading0',
        sort: 'asc'
      },
      {
        label: 'No. of members',
        field: 'heading1',
        sort: 'asc'
      },
      {
        label: 'No. of Likes',
        field: 'heading2',
        sort: 'asc'
      },
    ],
    
  };

  const data2 = {
    columns: [
      {
        label: 'Sr. No.',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Name',
        field: 'heading0',
        sort: 'asc'
      },
      {
        label: 'Engage Score',
        field: 'heading2',
        sort: 'asc'
      },
    ],
    
  };

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  );
  const axes2 = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  const [ideas, setIdeas] = useState();
  const [User, setUser] = useState();
  // const getideas = async () => {
  //   try {
  //     // console.log(skip);
  //     await axios
  //       .get("/api/idea/get-ideaadmin/", {
  //         headers: authHeader(),
  //       })
  //       .then(
  //         (res) => {
  //           setIdeas(res.data.ideas);
  //           console.log(res);
  //         },
  //         (err) => {
  //           console.log(err);
  //         }
  //       );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getideas();
  // }, []);
  return (
    <div>
      <div class="">
        <div class="row mx-3"> 
          <div class="col-2 ">
            <div class="my-5">
              <Navbar/>
            </div>
            
          </div>
          
          <div class="col-10">

          <div class="container ">
        <div class="row mx-4 my-5">
          <div class="col-sm">
            <div className="px-4 shadow bg-white rounded" style={{background:"white"}}>
                    <div className="row">
                      <div className="my-4 text-left col-9">
                      <div style={{height:"5rem"}}>
                        <h1 style={{ "fontSize":"1.6rem" ,fontWeight:"bolder",}}>Total Users :</h1>
                        <h2 style={{ "fontSize":"1.3rem" }}> 23243</h2>
                      </div>
                        </div>
                      <div className="col-3">
                        <div className='my-4 mx-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          <div class="col-sm">
          <div className="px-4 shadow bg-white rounded" style={{background:"white"}}>
                  <div className="row">
                  <div className="my-4 text-left col-9">
                      <div style={{height:"5rem"}}>
                        <h1 style={{ "fontSize":"1.6rem" ,fontWeight:"bolder",}}>Total Projects :</h1>
                        <h2 style={{ "fontSize":"1.3rem" }}> 23243</h2>
                      </div>                        
                        </div>
                        <div className="col-3">
                        <div className='my-4 mx-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                          </svg>
                        </div>
                        </div>
                  </div>
                </div>
          </div>
          <div class="col-sm">
          <div className="px-4 shadow bg-white rounded" style={{background:"white"}}>
                  <div className="row">
                  <div className="my-4 text-left col-9">
                  <div style={{height:"5rem"}}>
                        <h1 style={{ "fontSize":"1.6rem" ,fontWeight:"bolder",}}>Total Projects :</h1>
                        <h2 style={{ "fontSize":"1.3rem" }}> 23243</h2>
                      </div>
                        </div>
                        <div className="col-3">
                        <div className='my-4 mx-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                            </svg>
                        </div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
        <div>
        <div class='row mx-4 my-5' >
          <div class='col-6 ' >
            <div class="p-4 shadow bg-white rounded" style={{"background":"white"}}>
              <center>
                <div style={{ width: '400px',height: '300px' }}>
                  <Chart data={data} axes={axes} />
                </div>
              </center>
            </div>
          </div>
          <div class='col-6 ' >
            <div class="p-4 shadow bg-white rounded" style={{"background":"white"}}>
              <center>
                <div style={{ width: '400px', height: '300px' }}>
                  <Chart data={data} axes={axes} />
                </div>
              </center>
            </div>
          </div>  
        </div>  
        <div class='row mx-4 my-5' >
          <div class='col-8 '>  
          <div class="ml-2 shadow bg-white rounded" style={{"background":"white"}}>
            <div className="row my-3 mx-1">
              <div
                className="mt-2"
                style={{ backgroundColor: "white", color: "#B287FF", "fontWeight":"bolder" ,"fontSize":"1.5rem"}}
              >
                Top Projects
              </div>
            </div>
          <MDBTable responsive>
            <MDBTableHead columns={data1.columns} style={{backgroundColor: "#B787FF",color:"white"}}/>
            <MDBTableBody rows={data1.rows} />
          </MDBTable>
            
        </div>
            
          </div>
          <div class='col-4'>  
          <div class="ml-2 shadow bg-white rounded" style={{"background":"white"}}>
            <div className="row my-3 mx-1">
                <div
                  className="mt-2"
                  style={{ backgroundColor: "white", color: "#B287FF", "fontWeight":"bolder" ,"fontSize":"1.5rem"}}
                >
                  Popular Users
                </div>
              </div>
          <MDBTable responsive>
            <MDBTableHead columns={data2.columns} style={{backgroundColor: "#B287FF",color:"white"}}/>
            <MDBTableBody rows={data2.rows} />
          </MDBTable>
            
        </div>
          </div>
        </div>
      </div>
    </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
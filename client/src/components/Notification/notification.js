import React from "react";
import error_logo from "../../assets/svg/error.svg";
import attention_logo from "../../assets/svg/Attention.svg";
import success_logo from "../../assets/svg/Success.svg";
import info_logo from "../../assets/svg/Information.svg";

const Notification = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-5 col-4 ">
          <hr
            className="mt-2"
            style={{ width: "100%", height: "2px", color: "white" }}
          />
        </div>
        <div className="col-lg-2 col-4">
          <button
            className="btn-sm mb-1"
            style={{ backgroundColor: "#840FCC", color: "white" }}
          >
            NOTIFICATIONS
          </button>
        </div>
        <div className="col-lg-5 col-4">
          <hr
            className="mt-2"
            style={{ width: "100%", height: "2px", color: "white" }}
          />
        </div>
      </div>
      <div className="row">
        <h1 style={{color:"white"}}>No Notifications Available Right Now :)</h1>
        <div className="container  my-4">
          <div className="row my-5">
            <div className="col col-6">
              
              <div className="row">
              <div className="col col-3"></div>
              <div className="col col-8">
                <div className="px-4" style={{background:"#D6BEFF"}}>
                  <div className="row">
                    <div className="my-2 text-left col-10">
                      <h1 style={{ "fontSize":"1.2rem" ,fontWeight:"bolder"}}>Head</h1>
                      <p>lorem...</p>
                      <div className="mt-4"><button className="btn btn-sm" style={{border:"1px solid black"}}>Close</button></div>
                    </div>
                    <div className="col-2">
                      <img src= {error_logo} className="float-left" alt="error" style={{ height: "100px"}}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-1"></div>
              </div>

            </div>
            <div className="col col-6">
              
              <div className="row">
              <div className="col col-1"></div>
              <div className="col col-8">
                <div className="px-4" style={{background:"#D6BEFF"}}>
                  <div className="row">
                    <div className="my-2 text-left col-10">
                      <h1 style={{ "fontSize":"1.2rem" ,fontWeight:"bolder"}}>Head</h1>
                      <p>lorem...</p>
                      <div className="mt-4"><button className="btn btn-sm" style={{border:"1px solid black"}}>Close</button></div>
                    </div>
                    <div className="col-2">
                      <img src= {attention_logo} className="float-left" alt="error" style={{ height: "100px" }}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-3"></div>
              {/* <div className="col col-2"></div> */}
              </div>

            </div>
          </div>

          <div className="row my-5">
            <div className="col col-6">
              
              <div className="row">
              <div className="col col-3"></div>
              <div className="col col-8">
                <div className="px-4" style={{background:"#D6BEFF"}}>
                  <div className="row">
                    <div className="my-2 text-left col-10">
                      <h1 style={{ "fontSize":"1.2rem" ,fontWeight:"bolder"}}>Head</h1>
                      <p>lorem...</p>
                      <div className="mt-4"><button className="btn btn-sm" style={{border:"1px solid black"}}>Close</button></div>
                    </div>
                    <div className="col-2">
                      <img src= {success_logo} className="float-left" alt="error" style={{ height: "100px" }}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-1"></div>
              </div>

            </div>
            <div className="col col-6">
              
              <div className="row">
              <div className="col col-1"></div>
              <div className="col col-8">
                <div className="px-4" style={{background:"#D6BEFF"}}>
                  <div className="row">
                    <div className="my-2 text-left col-10">
                      <h1 style={{ "fontSize":"1.2rem" ,fontWeight:"bolder"}}>Head</h1>
                      <p>lorem...</p>
                      <div className="mt-4"><button className="btn btn-sm" style={{border:"1px solid black"}}>Close</button></div>
                    </div>
                    <div className="col-2">
                      <img src= {info_logo} className="float-left" alt="error" style={{ "height": "100px" }}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-3"></div>
              {/* <div className="col col-2"></div> */}
              </div>
            </div>
          </div>
          <div className="row mx-2">
            <div className="col col-4">
              <div className="mx-5" style={{background:"#D6BEFF"}}>
              
                  <center><img src= {info_logo} alt="error" style={{"height":"130px","padding-top":"2.6rem"}} /></center>
                
                <div>
                    <h1 style={{"fontWeight":"bolder","fontSize":"1.2rem"}}>lorem</h1>
                  <p className="my-3">Line 1942:15:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, </p>                      <hr style={{"color":"white",height:"10px"}}/> 
                  <button className="btn my-2" style={{"background":"#840FCC","color":"white","width":"80%"}}>Open</button>                                  </div>
                </div>
              </div>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default Notification;

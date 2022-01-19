import React from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
import InputTag from "./tags";

const CreateIdea = ()=>{
    
    return(
        <div >
            <h1 className="mb-3 mt-3" style={{color:"white", fontSize:"1.6rem"}}>! Clever Minds Come With Great Ideas !</h1>
            <div className="relative m-auto container" style={{backgroundColor: "#b6aaf3",borderRadius:"20px"}}>
                <div className="row z-10">
                    <img
                    src={Idyfy_logo}
                    style={{ height: "150px" }}
                    alt="IDYFY"
                    className="mt-2"
                    />
                    <form>
                    
                    <div className="flex justify-center">
                        <h1 className="mt-3" style={{fontSize:"1.6rem",fontWeight:"bold"}}>Create a New Idea !!</h1>
                    </div>
                    <div className="flex justify-center mt-3 mx-3">
                        <input
                        type="text"
                        name="title"
                        //onChange={}
                        className="form-control form_box"
                        placeholder="Title"
                        />
                    </div>
                    <div className="flex justify-center mt-3 mx-3">
                        <textarea
                        rows="5"
                        cols="60"
                        name="description"
                        //onChange={}
                        className="form-control form_box"
                        placeholder="Description"
                        ></textarea>
                    </div>
                    
                    <div className="flex justify-start mt-3 mx-3">
                        <InputTag/>
                    </div>

                    <div className="ml-3 mt-2 mb-3 custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="tandc"
                        />
                        <label
                        className="pl-3 custom-control-label text-white"
                        htmlFor="tandc"
                        >
                        I agree to the{" "}
                        <a href="/" className="link">
                            T&C
                        </a>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="mr-2 h-10 mb-10 btn button" >Create</button>
                    </div>
                    </form>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default CreateIdea;
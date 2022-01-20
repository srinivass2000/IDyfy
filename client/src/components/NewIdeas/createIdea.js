import React from "react";
import { useState } from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
import InputTag from "./tags";
import Tags from "./tagsfunc";
import axios from "axios";
import authHeader from "../../services/auth-header";

const CreateIdea = ()=>{
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [tags,setTags] = useState(['machine learning','blockchain']);
    //const [message,setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios({
                method: 'POST',
                url: 'http://localhost:5000/api/idea/create-idea',
                headers:authHeader(),
                data: {
                    title: title,
                    description: description,
                    tags: tags,
                },});
          
          if (res.status === 200) {
            setTitle("");
            setDescription("");
            setTags(['machine learning','blockchain']);
            //setMessage("User created successfully");
            console.log("idea created sucessfully");
          } else {
            //setMessage("Some error occured");
            console.log("some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
    
    return(
        <div >
            <h1 className="mb-3 mt-3" style={{color:"white", fontSize:"1.6rem"}}>! Clever Minds Come With Great Ideas !</h1>
            <div className=" m-auto container formsize" style={{backgroundColor: "#b6aaf3",width:"60%",borderRadius:"20px"}}>
                <div className="row">
                    <img
                    src={Idyfy_logo}
                    style={{ height: "150px" }}
                    alt="IDYFY"
                    className="mt-2"
                    />
                    <form onSubmit={handleSubmit}>
                    
                    <div className="flex justify-center">
                        <h1 className="mt-3" style={{fontSize:"1.6rem",fontWeight:"bold"}}>Create a New Idea !!</h1>
                    </div>
                    <div className="flex justify-center mt-3 mx-3">
                        <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control form_box"
                        placeholder="Title"
                        />
                    </div>
                    <div className="flex justify-center mt-3 mx-3">
                        <textarea
                        rows="5"
                        cols="60"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control form_box"
                        placeholder="Description"
                        ></textarea>
                    </div>
                    
                    <div className="flex justify-start mt-3 mx-3">
                        <InputTag/>
                    </div>

                    <div className="flex justify-start mt-3 mx-3">
                        <h1>functional tags below </h1>
                    </div>

                    <div className="flex justify-start mt-3 mx-3">
                        <Tags/>
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
                        <button type="submit" className="mr-2 h-10 mb-10 btn button" >Create</button>
                    </div>
                    </form>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default CreateIdea;
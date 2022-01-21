import React from "react";
import { useState } from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
//import axios from "axios";
//import authHeader from "../../services/auth-header";
import { useLocation } from "react-router-dom";

const EditProfile = ()=>{
    const loc = useLocation();
    console.log(loc.state.user)
    
    const [name,setName] = useState(loc.state.user.name);
    const [email,setEmail] = useState(loc.state.user.email);
    //const [tags,setTags] = useState([]);
    
    
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let res = await axios({
    //             method: 'POST',
    //             url: 'http://localhost:5000/api/idea/create-idea',
    //             headers:authHeader(),
    //             data: {
    //                 title: title,
    //                 description: description,
    //                 tags: tags,
    //             },});
          
    //       if (res.status === 200) {
    //         setTitle("");
    //         setDescription("");
    //         setTags([]);
    //         console.log("idea updated sucessfully");
    //       } else {
    //         console.log("some error occured");
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    
    return(
        <div >
            <h1 className="mb-3 mt-3" style={{color:"white", fontSize:"1.6rem"}}>! Edit Your Profile So You Can Satnd Out In The Crowd !</h1>
            <div className=" m-auto container formsize" style={{backgroundColor: "#b6aaf3",width:"60%",borderRadius:"20px"}}>
                <div className="row">
                    <img
                    src={Idyfy_logo}
                    style={{ height: "150px" }}
                    alt="IDYFY"
                    className="mt-2"
                    />
                    <form 
                    // onSubmit={handleSubmit}
                    onKeyPress={event => {
                        if (event.which === 13 /* Enter */) {
                          event.preventDefault();
                        }}
                    }>
                    
                    <div className="flex justify-center">
                        <h1 className="mt-3" style={{fontSize:"1.6rem",fontWeight:"bold"}}>Edit Profile !!</h1>
                    </div>
                    {console.log(name)}
                    <div className="flex justify-center mt-3 mx-3">
                        <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control form_box"
                        placeholder="Title"
                        />
                    </div>
                    <div className="flex justify-center mt-3 mx-3">
                        <textarea
                        rows="5"
                        cols="60"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form_box"
                        placeholder="Description"
                        ></textarea>
                    </div>

                    <div className="flex justify-start mt-3 mx-3">
                    
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="mr-2 h-10 mb-10 btn button" >Save</button>
                    </div>
                    </form>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default EditProfile;
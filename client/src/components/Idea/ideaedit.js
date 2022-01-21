import React from "react";
import { useState, useRef, useEffect } from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
//import axios from "axios";
//import authHeader from "../../services/auth-header";
import Tags from "../NewIdeas/tagsfunc";
import { useLocation } from "react-router-dom";

const EditIdea = ()=>{
    const loc = useLocation();
    console.log(loc.state.idea)
    
    const [title,setTitle] = useState(loc.state.idea.title);
    const [description,setDescription] = useState(loc.state.idea.description);
    //const [tags,setTags] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    // code for tags
    const [tags,setTags] = useState([...loc.state.idea.tags]);

    const tagInput = useRef();

    const removeTag = (i) => {
        const newTags = [ ...tags ];
        newTags.splice(i, 1);
        setTags([...newTags]);
      }

    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
          if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
          setTags([...tags, val]);
          tagInput.current.value = null;
        }
        //  else if (e.key === 'Backspace' && !val) {
        //   removeTag(tags.length - 1);
        // }
      }
    // code for tags

    

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
            <h1 className="mb-3 mt-3" style={{color:"white", fontSize:"1.6rem"}}>! Edit Your Idea To Make It More Brilliant !</h1>
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
                        <h1 className="mt-3" style={{fontSize:"1.6rem",fontWeight:"bold"}}>Edit Idea !!</h1>
                    </div>
                    {console.log(title)}
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
                    <div className="input-tag">
                        <ul className="input-tag__tags">
                        { tags.map((tag, i) => (
                            <li key={i}>
                            {tag}
                            <button type="button" onClick={()=>removeTag(i)}>+</button>
                            </li>
                        ))}
                        <li className="input-tag__tags__input"><input type="text" placeholder="Add Tags" 
                        ref={tagInput}
                        onKeyDown={inputKeyDown}/></li>
                        </ul>
                    </div>
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

export default EditIdea;
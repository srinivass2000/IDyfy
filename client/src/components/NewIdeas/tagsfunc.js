import React, {useState, useRef, useEffect} from "react";
import "../NewIdeas/tags.css";

const Tags = ({childToParent})=> {
    
    const [tags,setTags] = useState([]);

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
    
    useEffect(() => {
        childToParent(tags)
    },[tags])
    
    return(
        
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
    );
}

export default Tags;
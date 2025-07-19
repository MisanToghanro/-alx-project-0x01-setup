import { PostData, PostModalProps } from "@/interfaces";

import React, { useState } from "react";

const PostModal: React.FC<PostModalProps>= ({onClose, onSubmit})=>{

    const[postTitle , setPostTitle] = useState("");
    const[postBody, setPostBody] = useState("");

    const handleSubmit = (e:React.FormEvent)=>{
       e.preventDefault();
    const post: PostData = {
     userId: 1, 
      title:"",
      body:"",};
      
      onSubmit(post);
      onClose();
    }

return(
    <div>
        <div>
            <h2>Add New Post</h2>

        <form  onSubmit={handleSubmit}>
            
        <div>
            <label>Title</label>
             <input
             value={postTitle}
             onChange={(e)=>setPostTitle(e.target.value)}
                placeholder="Enter post title"
             />
        </div>

        <div>
            <label>Body</label>
              <textarea 
              value={postBody}
              onChange={(e)=>setPostBody(e.target.value)}
               placeholder="Enter post content"
              />
        </div>

        <button type="submit">Add post</button>
        <button onClick={onClose} type="button">Cancel</button>

        </form>
        </div>
    </div>

)
}
export default PostModal;
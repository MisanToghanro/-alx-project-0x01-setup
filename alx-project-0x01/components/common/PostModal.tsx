import { PostData, PostModalProps } from "@/interfaces";

import React, { useState } from "react";

const PostModal: React.FC<PostModalProps>= ({onClose, onSubmit})=>{

    const[postTitle , setPostTitle] = useState("");
    const[postBody, setPostBody] = useState("");

    const resetForm = () =>{
        setPostTitle("");
        setPostBody("");
    }

    const handleSubmit = (e:React.FormEvent)=>{
       e.preventDefault();
    const post: PostData = {
     userId: 1, 
      title:postTitle,
      body:postBody,};
      
      onSubmit(post);
      resetForm();
      onClose();
    }

return(
    <div className="fixed inset-0 bg-gradient-to-b from-blue-500 to-purple-600 flex justify-center items-center">
        <div className=" bg-white rounded-md shadow-lg w-full max-w-md p-8">
            <h2 className=" mb-2 bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent text-center text-2xl font-medium ">Add New Post</h2>

        <form  onSubmit={handleSubmit} className="mb-2">
            
        <div>
            <label htmlFor="title" className="block mb-2 font-medium text-lg text-blue-500">Title</label>
             <input
             value={postTitle}
             onChange={(e)=>setPostTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full rounded-lg border px-6 py-2 focus:outline-none focus:ring-2 ring-blue-500" />

             <label htmlFor="body" className="block mb-2 font-medium text--lg text-blue-500">Body</label>
              <textarea 
              value={postBody}
              onChange={(e)=>setPostBody(e.target.value)}
               placeholder="Enter post content"
               className=" w-full rounded-lg border focus:outline-none focus:ring-2 ring-blue-500"
              />

        </div>

        <div className="flex justify-between items-center mt-6">
            
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer" >Add post</button>
        <button onClick={onClose} type="button"  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer" >Cancel</button>
        </div>


        </form>
        </div>
    </div>

)
}
export default PostModal;
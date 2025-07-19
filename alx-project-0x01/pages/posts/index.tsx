
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import React from "react";
import PostModal from "@/components/common/PostModal";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

import { PostPageProps } from "@/interfaces";

const Posts: React.FC<PostPageProps> = ({posts}) =>{

  const [isModalOpen , setIsModalOpen] = useState(false);
  const [allPost , setAllPost] = useState(posts);


  const handleOpenModal = () =>setIsModalOpen(true);

  const handleCloseModal = () =>setIsModalOpen(false);

  const handleAddPost = (newPost:PostData) =>{
         const postId = allPost.length + 1;
         setAllPost([{...newPost , id:postId}, ...allPost ])
         setIsModalOpen(false)
  }

    
        return(<div className="bg-gradient-to-l from-purple-600 to-blue-500 flex flex-col ">

            <Header/>
            <main className="p-4">

                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold text-white">Post Content</h1>
                    <button className="bg-blue-700 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-blue-800" onClick={handleOpenModal}>
                        Add Post
                    </button>
                </div>
             
            
            <div className="grid md:grid-cols-3  grid-cols-1 gap-2">{allPost.map((post)=>(
            <PostCard
            title={post.title}
             body={post.body}
              userId={post.userId}
              id={post.id}
             key={post.id}
             />)
            )}</div>

            </main>

            {isModalOpen && (<PostModal onClose={handleCloseModal} onSubmit={handleAddPost}/>) }
        

        </div>)
}
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
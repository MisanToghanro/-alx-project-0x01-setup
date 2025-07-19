
import Header from "@/components/layout/Header";
import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserListProps} from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces"
import { useState } from "react";

const Users: React.FC<UserListProps> =({users})=>{

  const[openForm , setOpenForm] = useState(false);
  const [addedUser , setAddedUser] = useState(users);


   const formOpen = ()=> {setOpenForm(true)};

   const formClose = () =>{setOpenForm(false)};

    const handleAddUser = (newUser:UserData) =>{
      const userID = addedUser.length+1;
      setAddedUser([{...newUser, id:userID}, ...addedUser])
      setOpenForm(false); }
    


    return(
        <div className="bg-gradient-to-b from-orange-400 to-red-500 flex flex-col w-full mx-auto max-w-7xl ">
            <Header/>

            <main className=" p-4">
              <div className="flex justify-between p-4">
                <h1 className="text-2xl  font-semibold text-white">Users page</h1>

                <button className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 cursor-pointer rounded-full" onClick={formOpen}>Add  User</button>

              </div>
            

            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">{addedUser.map((user)=>(
                <UserCard
                key={user.id}
                {...user}
                />
            ))}</div>
            </main>
          
          {openForm && <UserModal onClose={formClose} onSubmit={handleAddUser}/>}

        </div>
    )

    

    
}
    export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users

import {  UserProps } from "@/interfaces";

const UserCard : React.FC<UserProps>= ({  id,name,email,username,address,phone, website,company,}) =>{

    return(
        <div className="cursor-pointer mx-auto space-y-4 my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-gray-500 flex justify-between items-center space-x-2">
                 <p className="text-md"><strong>User ID:</strong> {id}</p>
                 <p><strong>Name:</strong> {name}</p>
            </div>

             <div className="text-gray-600 ">
                <p><strong>UserEmail:</strong> {email}</p>
                <p><strong>UserName:</strong> {username}</p>
                <p><strong>Phone No:</strong> {phone}</p>
             </div>
    
             <div className="text-gray-700 ">
                <p><strong>Address:</strong> {address.city}</p>
               <p><strong>Company:</strong> {company.name}</p>
                <p><strong>Website:</strong> {website}</p>
             </div>
    
    
        </div>
    )
}
export default UserCard;
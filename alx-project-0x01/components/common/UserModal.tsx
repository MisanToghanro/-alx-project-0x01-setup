import { UserData , UserModalProps } from "@/interfaces";
import React, { useState } from "react";
import { requestFormReset } from "react-dom";


const UserModal: React.FC<UserModalProps> = ({onSubmit, onClose}) =>{

    
     const[name, setName] = useState("");
    const [userName , setUserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userWeb, setUserWeb] = useState("");
    const[userCompany, setUserCompany] = useState("");

    const resetForm = () =>{
  setName("");
  setUserName("");
  setuserEmail("");
  setUserAddress("");
  setUserPhone("");
  setUserWeb("");
  setUserCompany("");}

    const handleSubmit =(e:React.FormEvent) =>{
        e.preventDefault();

     const user: UserData= {   
    id:1,
    name:name,
    username:userName,
    email:userEmail,
    address:{street:userAddress,suite:"",city:"",zipcode:"",geo:{lat:"",lng:"",}},
    phone:userPhone,
    website:userWeb,
    company:{name:userCompany,catchPhrase:"",bs:"",}};

        onSubmit(user);
        resetForm();
        onClose();
    }

    return(
        <div className=" fixed inset-0 bg-gradient-to-r from-orange-500 to-orange-700   flex justify-center items-center">

            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">

            <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">Add New User</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                 <label htmlFor="name" className="block text-orange-600 font-medium mb-2">Name</label>
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                <label htmlFor="user name" className="block text-orange-600 font-medium mb-2">UserName</label>
                <input
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                className=" border rounded-lg w-full  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                <label htmlFor="email" className="font-medium mb-2 block text-orange-600">Email</label>
                <input
                value={userEmail}
                onChange={(e)=>setuserEmail(e.target.value)}
                className="border rounded-lg w-full  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                <label htmlFor="address" className="font-medium mb-2 text-orange-600 block">Address</label>
                <input
                value={userAddress}
                onChange={(e)=>setUserAddress(e.target.value)}
                className="border rounded-lg w-full  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                <label htmlFor="phone" className="font-medium text-orange-600 block mb-2">Phone</label>
                <input 
                value={userPhone}
                onChange={(e)=>setUserPhone(e.target.value)}
                className="border rounded-lg w-full  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                <label htmlFor="website" className="font-medium text-orange-600 mb-2 block">Website</label>
                <input 
                value={userWeb}
                onChange={(e)=>setUserWeb(e.target.value)}
                className="border rounded-lg w-full  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                <label htmlFor="company" className="font-medium mb-2 text-orange-600 block">Company</label>
                <input 
                value={userCompany}
                onChange={(e)=>setUserCompany(e.target.value)}
                className="border rounded-lg w-full  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                </div>
                   
                   <div className="flex justify-between items-center-safe"> 
                <button type="submit" className="px-6 py-2 rounded-full text-white bg-orange-500 hover:bg-orange-600 cursor-pointer">Add user</button>
                <button type="button" onClick={onClose} className=" px-6 py-2 rounded-full text-white bg-red-500 hover:bg-red-600 cursor-pointer">cancel</button>
                   </div>
            </form>

            </div>
            
        </div>
    )
}
export default UserModal;
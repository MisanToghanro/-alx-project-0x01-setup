import { UserData , UserModalProps } from "@/interfaces";
import React, { useState } from "react";


const UserModal: React.FC<UserModalProps> = ({onSubmit, onClose}) =>{

    const[name, setName] = useState("");
    const [userName , setUserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userWeb, setUserWeb] = useState("");
    const[userCompany, setUserCompany] = useState("");

    const handleSubmit =(e:React.FormEvent) =>{
        e.preventDefault();

     const user: UserData= {   
    id:1,
    name:"",
    username:"",
    email:"",
    address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"",lng:"",}},
    phone:"",
    website:"",
    company:{name:"",catchPhrase:"",bs:"",}};

        onSubmit(user);
        onClose()
    }

    return(
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="name"
                />
                <input
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                placeholder="user name"
                />
                <input
                value={userEmail}
                onChange={(e)=>setuserEmail(e.target.value)}
                placeholder="email"
                />
                <input
                value={userAddress}
                onChange={(e)=>setUserAddress(e.target.value)}
                placeholder="address"
                />
                <input 
                value={userPhone}
                onChange={(e)=>setUserPhone(e.target.value)}
                placeholder="phone number"/>
                <input/>
                <input 
                value={userWeb}
                onChange={(e)=>setUserWeb(e.target.value)}
                placeholder="Website url"/>
                <input/>
                <input 
                value={userCompany}
                onChange={(e)=>setUserCompany(e.target.value)}
                placeholder="Company affliliation"/>
                <input/>

                <button type="submit">Add user</button>
                <button type="button" onClick={onClose}>cancel</button>
            </form>

        </div>
    )
}
export default UserModal;
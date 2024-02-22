import React,{useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return <div>Please sahi se login karo</div>

     return <div>Swagat hai Aapka!! {user.username}</div>
   
}
export default Profile
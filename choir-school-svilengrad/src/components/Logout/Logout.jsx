import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom"
import { Usercontext } from "../../contexts/UserContext";
import { userLogout } from "../../services/userService";

const Logout = () => {

    const {setUserFunction} = useContext(Usercontext)
    useEffect(() => {
        const user = localStorage.getItem('user');
        
        if(user) {
            
            userLogout().then(() => localStorage.removeItem('user'))
            .catch(err => console.log(err))
        }
        
        setUserFunction({})
    })


return <Navigate to='/'/>

}


export default Logout;
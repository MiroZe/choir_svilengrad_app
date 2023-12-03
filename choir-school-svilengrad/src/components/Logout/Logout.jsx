import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom"
import { Usercontext } from "../../contexts/UserContext";
import { userLogout } from "../../services/userService";
import { useDispatch } from "react-redux";
import { setError } from "../../reduxStates/store";

const Logout = () => {

    const {setUserFunction} = useContext(Usercontext);
    const dispatch = useDispatch();
    useEffect(() => {
        const user = localStorage.getItem('user');

        
        
        if(user) {

            
            userLogout().then(() => localStorage.removeItem('user'))
            .catch(err => dispatch(setError(err.message)))
        }
        
        setUserFunction({})
    })


return <Navigate to='/'/>

}


export default Logout;
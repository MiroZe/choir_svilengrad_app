import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from '../../contexts/UserContext';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxStates/store";

const RouteUserGuard = ({
    children,
}) => {

    const {isAuthenticated} = useContext(Usercontext)
    const dispatch = useDispatch()

   
    
    if (!isAuthenticated) {
        dispatch(setError('You do not have access to this resources.Please log in!'));
        return <Navigate to="/auth/login" />;
    }
  

    return children ? children : <Outlet />
};

export default RouteUserGuard